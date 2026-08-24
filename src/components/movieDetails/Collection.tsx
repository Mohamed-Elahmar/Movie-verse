import type { MovieCollection } from "@/types/movie";

function Collection({ collectionData }: { collectionData: MovieCollection }) {
  return (
    <div>
      <hr className="divider mb-7" />
      <h3 className="text-4xl mb-7">Collection</h3>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-10">
        <div className="flex flex-row gap-5">
          <img
            className="w-1/2 self-center object-cover border-3 border-(--border-me)"
            src={`https://image.tmdb.org/t/p/w500${collectionData.backdrop_path}`}
          />
          <img
            className="w-1/3 self-center object-cover border-3 border-(--border-me)"
            src={`https://image.tmdb.org/t/p/w500${collectionData.poster_path}`}
          />
        </div>
        <div className="w-2/3 self-center">
          <p className="text-3xl text-(--text-me) mb-3">
            {collectionData.name}
          </p>
          <p className="text-(--muted-text-me)">{collectionData.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Collection;
