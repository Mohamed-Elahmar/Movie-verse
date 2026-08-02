import MovieCarousel from "./MovieCarousel";
import type { Movie } from "@/types/movie";

function CurrentlyWatchingMovies({
  currentMovies,
}: {
  currentMovies: Movie[];
}) {
  return (
    <div className="currently-watching border-u flex flex-col w-full  gap-5">
      <h3 className="font-space-grotesk text-5xl">Currently watching</h3>
      <div className="px-[2em] w-full">
        <MovieCarousel movies={currentMovies} />
      </div>
    </div>
  );
}

export default CurrentlyWatchingMovies;
