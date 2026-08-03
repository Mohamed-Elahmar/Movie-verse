import MovieCarousel from "./MovieCarousel";
import type { Movie } from "@/types/movie";

function TopRatedMovies({ currentMovies }: { currentMovies: Movie[] }) {
  return (
    <div className="top-rated border-u flex flex-col w-full  gap-5">
      <h3 className="font-space-grotesk text-5xl">Top Rated Movies</h3>
      <div className="px-[2em] w-full">
        <MovieCarousel movies={currentMovies} />
      </div>
    </div>
  );
}

export default TopRatedMovies;
