import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useNavigate } from "react-router";

import type { Movie } from "@/types/movie";
function MovieCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate();
  return (
    <Card
      className="cursor-pointer w-full pt-0 text-black bg-indigo-300"
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        className="aspect-2/3 w-full object-cover"
        alt="No Image Available"
      />
      <CardHeader>
        <CardTitle className="text-lg md:text-2xl">
          {movie.original_title}
        </CardTitle>
        <CardDescription className="text-sm md:text-base">
          {movie.overview.substring(0, 100) + " . . ."}
        </CardDescription>
      </CardHeader>
    </Card>
  );
}

export default MovieCard;
