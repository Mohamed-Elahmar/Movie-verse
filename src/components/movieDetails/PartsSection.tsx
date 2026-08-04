import type { Movie } from "@/types/movie";
import MovieCard from "../Explore/MovieCard";

function PartsSection({ parts }: { parts: Movie[] }) {
  return (
    <div>
      <hr className="divider mb-7" />
      <p className="text-3xl">Parts</p>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 ">
        {parts.map((part) => {
          console.log(part.id);
          return <MovieCard movie={part} key={part.id} />;
        })}
      </div>
    </div>
  );
}

export default PartsSection;
