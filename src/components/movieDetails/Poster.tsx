function Poster({ posterPath }: { posterPath: string | null | undefined }) {
  return (
    // absolute -bottom-8 left-8
    <div className="absolute top-27 left-6 w-1/4  lg:static  lg:w-1/7">
      <img
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt="No Poster Available"
      />
    </div>
  );
}

export default Poster;
