import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

function SearchBar() {
  return (
    <div className="flex flex-row w-4/5 h-1/4 px-3 items-center border-2 rounded-lg border-(--border-me)">
      <Search />
      <Input
        placeholder="Search a movie or a series"
        className="text-(--text-me) border-0 caret-(--secondary-me) cursor-pointer "
      />
    </div>
  );
}

export default SearchBar;
