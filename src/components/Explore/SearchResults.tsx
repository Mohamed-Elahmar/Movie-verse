import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  ImageRevealList,
  type ImageRevealListItem,
} from "@/components/ui/image-reveal-list";
import type { Movie } from "@/types/movie";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const query = searchParams.get("query") ?? "";
  const [, setResults] = useState(null);
  const [items, setItems] = useState<ImageRevealListItem[] | null>(null);

  const closeResults = () => {
    navigate(-1);
  };

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeResults();
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${encodeURIComponent(query)}&language=en-US&page=1`,
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
        setResults(res.results);
        return res.results;
      })
      .then((res) => {
        setItems(
          res.map(
            (result: Movie, indexOfResult: number): ImageRevealListItem => {
              return {
                id: result.id.toString(),
                title: result.title,
                subtitle: result.release_date,
                image: `https://image.tmdb.org/t/p/w500${result.poster_path}`,
                number: indexOfResult.toString(),
                href: `/movie/${result.id}`,
              };
            },
          ),
        );
      })
      .catch((err) => console.error("Search fetch failed:", err));
  }, [query]);

  return (
    <div
      onClick={closeResults}
      className="fixed inset-0 z-30 flex items-center justify-center bg-black/35 p-4 backdrop-blur-[2px]"
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[95%] max-h-[70vh] overflow-y-auto rounded-3xl border-2 border-(--border-me) bg-(--background-transparent-me) p-6"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {items && items.length > 0 ? (
          <ImageRevealList items={items} />
        ) : (
          <p className="p-4 text-center">No results</p>
        )}
      </div>
    </div>
  );
}

export default SearchResults;
