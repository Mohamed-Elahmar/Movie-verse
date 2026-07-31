import { useEffect, useState } from "react";
import Poster from "./Poster";
export interface MovieVideosResponse {
  id: number;
  results: Video[];
}

export interface Video {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
}

function Trailer({
  movieId,
  // posterPath,
}: {
  movieId: number;
  // posterPath: string | null | undefined;
}) {
  const [trailerObject, setTrailerObject] = useState<Video | null>(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`, {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((res: MovieVideosResponse) => {
        console.log(res.results);
        return res.results.find(
          (video) => video.site === "YouTube" && video.type === "Trailer",
        );
      })
      .then((video) => {
        if (!video) {
          return;
        } else {
          setTrailerObject(video);
        }
      });
  }, []);
  return (
    <div className="lg:absolute lg:w-1/2 lg:right-0 z-0 ">
      {trailerObject ? (
        <iframe
          className="w-full  aspect-2/1"
          src={`https://www.youtube.com/embed/${trailerObject.key}`}
          title={trailerObject.name}
          allowFullScreen
        />
      ) : (
        <div>No Trailer Available</div>
      )}
    </div>
  );
}

export default Trailer;
