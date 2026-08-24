import { DiagonalCarousel } from "@/components/ui/diagonal-carousel";
import type { Movie } from "../../types/movie";
// import { useNavigate } from "react-router";
function MovieCarousel({ movies }: { movies: Movie[] }) {
  const items = movies.map((movie) => ({
    src: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
    title: movie.title,
    id: movie.id,
  }));

  return (
    <DiagonalCarousel
      items={items}
      defaultActiveIndex={2}
      slideSize={200}
      // onActiveIndexChange={()=>{movies.find((movie)=>(movie.title===));useNavigate()}}
      className="h-[70vh] bg-(--background-me) text-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
    />
  );
}

export default MovieCarousel;

// import {
//   Carousel,
//   CarouselContent,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";

// import { CarouselItem } from "@/components/ui/carousel";

// function MovieCarousel({ movies }: { movies: Movie[] }) {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full"
//     >
//       <CarouselContent>
//         {movies?.map((movie) => (
//           <CarouselItem
//             key={movie.id}
//             className="basis-1/2 md:basis-1/2 lg:basis-1/4"
//           >
//             <MovieCard movie={movie} />
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   );
// }

// export default MovieCarousel;
