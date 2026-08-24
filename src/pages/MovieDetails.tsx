import MovieCard from "@/components/Explore/MovieCard";
import Collection from "@/components/movieDetails/Collection";
import GenreBar from "@/components/movieDetails/GenreBar";
import PartsSection from "@/components/movieDetails/PartsSection";
import Poster from "@/components/movieDetails/Poster";
import Trailer from "@/components/movieDetails/Trailer";
import VoteBox from "@/components/movieDetails/VoteBox";
import type { Movie, MovieCollection, MovieData } from "@/types/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {
  const params = useParams();
  const movieId = params.movieId;

  const [movieData, setMovieData] = useState<MovieData | null>(null);
  const [collectionData, setCollectionData] = useState<MovieCollection | null>(
    null,
  );

  useEffect(() => {
    if (!movieId) return;
    const ac = new AbortController();
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      signal: ac.signal,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: MovieData) => {
        setMovieData(res);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch movie data:", err);
      });

    return () => ac.abort();
  }, [movieId]);

  useEffect(() => {
    // scroll to top when navigating between movies
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [movieId]);

  if (!movieId) {
    return;
  }

  useEffect(() => {
    const collectionId = movieData?.belongs_to_collection?.id;
    if (!collectionId) return;
    const ac = new AbortController();
    fetch(`https://api.themoviedb.org/3/collection/${collectionId}`, {
      signal: ac.signal,
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: MovieCollection) => {
        setCollectionData(res);
        console.log(res);
      })
      .catch((err) => {
        if (err.name === "AbortError") return;
        console.error("Failed to fetch collection data:", err);
      });

    return () => ac.abort();
  }, [movieData?.belongs_to_collection?.id]);

  return (
    <div className="flex flex-col gap-20 min-h-full">
      <div>
        <h2 className="text-5xl pb-4">{movieData?.original_title}</h2>
        <div className="relative flex flex-col gap-[4.5em] lg:flex-row  ">
          <Trailer
            movieId={parseInt(movieId)}
            // posterPath={movieData?.poster_path}
          />
          <Poster posterPath={movieData?.poster_path} />

          {/* movies data */}
          <div className="flex flex-col gap-4 lg:w-1/4">
            {movieData?.genres && <GenreBar genres={movieData?.genres} />}
            <p className="w-full text-(--muted-text-me)">
              {movieData?.overview}
            </p>
            {movieData?.vote_average && movieData.vote_count && (
              <VoteBox
                voteAverage={movieData?.vote_average}
                voteCount={movieData?.vote_count}
              />
            )}
          </div>
        </div>
      </div>
      {collectionData && <Collection collectionData={collectionData} />}

      {collectionData?.parts && collectionData?.parts.length > 0 && (
        <PartsSection parts={collectionData.parts} />
      )}
    </div>
  );
}

export default MovieDetails;
