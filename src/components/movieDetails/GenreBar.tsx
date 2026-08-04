import type { Genre } from "@/types/movie";

function GenreBar({ genres }: { genres: Genre[] }) {
  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-4 ">
      {genres.map((obj) => (
        <div
          key={obj.id}
          className="border-2 border-(--border-me) place-content-center text-center rounded-xl text-(--primary-me)"
        >
          {obj.name}
        </div>
      ))}
    </div>
  );
}

export default GenreBar;
