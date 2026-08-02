// import React from "react";
import type { Movie } from "../types/movie";
import CurrentlyWatchingMovies from "../components/Explore/CurrentlyWatchingMovies";

import { useEffect, useState } from "react";
import PopularMovies from "@/components/Explore/PopularMovies";

function ExplorePage() {
  const [currentMovies, setCurrentMovies] = useState<Movie[]>([]);
  const [popularMovies, setPopularMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState<number>(1);
  const [totalPages] = useState<number>(500);

  useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=11", {
      headers: {
        Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
        accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setCurrentMovies(data.results);
        console.log(currentMovies);
      });
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
          accept: "application/json",
        },
      },
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setPopularMovies(res.results);
        // setTotalPages(res.total_pages);
      });
  }, [page]);

  return (
    <div className="flex flex-col gap-10">
      <CurrentlyWatchingMovies currentMovies={currentMovies} />
      <PopularMovies
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        popularMovies={popularMovies}
      />
    </div>
  );
}

export default ExplorePage;
