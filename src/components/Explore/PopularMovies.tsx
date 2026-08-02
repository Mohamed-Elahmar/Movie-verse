import type { Movie } from "@/types/movie";
import MoviesGrid from "./MoviesGrid";
import { PaginationSelector } from "./PaginationSelector";

function PopularMovies({
  page,
  setPage,
  totalPages,
  popularMovies,
}: {
  page: number;
  setPage: (pageNum: number) => void;
  totalPages: number;
  popularMovies: Movie[];
}) {
  return (
    <div className="currently-watching flex flex-col w-full gap-5">
      <h2 className="font text-5xl">Popular movies</h2>
      <PaginationSelector
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
      <MoviesGrid movies={popularMovies} />
    </div>
  );
}

export default PopularMovies;
