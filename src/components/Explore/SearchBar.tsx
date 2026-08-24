// import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const query = formData.get("query") as string;

    navigate(`/explore/search-results?query=${query}`);

    // setUser(result.user); // update state
    // navigate("/dashboard"); // redirect
  }

  return (
    <div className="w-full md:w-3/5 max-w-xl rounded-2xl border border-white/10 bg-white/5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl overflow-hidden">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 px-3 py-2.5 md:px-4"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-(--secondary-me)/15 text-(--secondary-me)">
          <Search className="h-4 w-4" />
        </div>

        <input
          aria-label="Search movies"
          name="query"
          placeholder="Search a movie or a series"
          className="h-10 flex-1 border-0 bg-transparent text-sm text-(--text-me) placeholder:text-(--text-me)/60 caret-(--secondary-me) outline-none"
        />

        <button
          type="submit"
          className="rounded-xl bg-(--secondary-me) px-4 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-(--background-me) transition-opacity hover:opacity-90"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
