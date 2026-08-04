import { Routes, Route, useLocation } from "react-router";

import ExplorePage from "./pages/ExplorePage";
import MovieDetails from "./pages/MovieDetails";
import Logo from "./components/Explore/Logo";
import SearchBar from "./components/Explore/SearchBar";
import Home from "./pages/Home";

function App() {
  const location = useLocation();
  const showHeader = location.pathname !== "/";
  const isHome = location.pathname === "/";

  return (
    <div
      className={`box-border bg-(--background-me) text-(--text-me) min-h-screen ${isHome ? "" : "px-[4em] py-[2em]"}`}
    >
      {showHeader && (
        <header className="h-[20dvh] flex flex-col items-start gap-[1em] py-[1em] md:flex-row md:items-center md:justify-start md:gap-[3em]">
          <Logo className={`text-2xl md:text-3xl lg:text-4xl `} />
          <SearchBar />
        </header>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
