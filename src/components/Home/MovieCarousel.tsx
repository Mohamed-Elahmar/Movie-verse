import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import type { Movie } from "../../types/movie";
import MovieCard from "../../components/Home/MovieCard";
import { CarouselItem } from "@/components/ui/carousel";

function MovieCarousel({ movies }: { movies: Movie[] }) {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {movies?.map((movie) => (
          <CarouselItem
            key={movie.id}
            className="basis-1/2 md:basis-1/2 lg:basis-1/4"
          >
            <MovieCard movie={movie} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default MovieCarousel;
