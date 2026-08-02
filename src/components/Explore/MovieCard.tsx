import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

import { useNavigate } from "react-router";

import type { Movie } from "@/types/movie";
function MovieCard({ movie }: { movie: Movie }) {
  const navigate = useNavigate();
  return (
    <CardContainer
      className="inter-var w-full "
      onClick={() => {
        navigate(`/movie/${movie.id}`);
      }}
    >
      <CardBody className="bg-(--card-me)  relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-[60vh] rounded-xl p-6 border flex flex-col justify-evenly overflow-hidden">
        <div>
          <CardItem
            translateZ="50"
            className="text-xl font-bold text-(--text-me) dark:text-white"
          >
            {`${movie.original_title}`}
          </CardItem>
          <CardItem
            as="p"
            translateZ="60"
            className="text-(--muted-text-me) text-sm max-w-full mt-2 dark:text-neutral-300 max-h-15 overflow-hidden"
          >
            {`${movie.overview}`}
          </CardItem>
        </div>
        <CardItem
          translateZ="100"
          rotateX={10}
          rotateZ={-10}
          className="w-full mt-4 flex flex-col items-center"
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            className=" h-64 object-contain rounded-xl group-hover/card:shadow-xl "
            alt="thumbnail"
          />
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

export default MovieCard;
