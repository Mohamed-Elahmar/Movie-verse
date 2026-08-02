import type { Movie } from "@/types/movie";
import MovieCard from "./MovieCard";

function MoviesGrid({ movies }: { movies: Movie[] }) {
  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4  ">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

export default MoviesGrid;
