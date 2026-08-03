import GenreBar from "@/components/movieDetails/GenreBar";
import Poster from "@/components/movieDetails/Poster";
import Trailer from "@/components/movieDetails/Trailer";
import VoteBox from "@/components/movieDetails/VoteBox";
import type { MovieData } from "@/types/movie";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function MovieDetails() {
  const params = useParams();
  const movieId = params.movieId;

  const [movieData, setMovieData] = useState<MovieData | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setMovieData(res);
        console.log(res);
      });
  }, []);

  if (!movieId) {
    return;
  }

  return (
    <div className="flex flex-col gap-6 min-h-full">
      <h2 className="text-4xl">{movieData?.original_title}</h2>
      <div className="relative flex flex-col gap-[4.5em] lg:flex-row  ">
        <Trailer
          movieId={parseInt(movieId)}
          // posterPath={movieData?.poster_path}
        />
        <Poster posterPath={movieData?.poster_path} />

        {/* movies data */}
        <div className="flex flex-col gap-4 lg:w-1/4">
          {movieData?.genres && <GenreBar genres={movieData?.genres} />}
          <p className="w-full">{movieData?.overview}</p>
          {movieData?.vote_average && movieData.vote_count && (
            <VoteBox
              voteAverage={movieData?.vote_average}
              voteCount={movieData?.vote_count}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default MovieDetails;
