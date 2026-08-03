import type { Genre } from "@/types/movie";

function GenreBar({ genres }: { genres: Genre[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 ">
      {genres.map((obj) => (
        <div
          key={obj.id}
          className="border-3 place-content-center text-center rounded-xl"
        >
          {obj.name}
        </div>
      ))}
    </div>
  );
}

export default GenreBar;
