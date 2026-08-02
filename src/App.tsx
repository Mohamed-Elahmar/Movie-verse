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
      className={`box-border bg-(--background-me) text-(--primary-me) min-h-screen ${isHome ? "" : "px-[4em] py-[2em]"}`}
    >
      {showHeader && (
        <header className="h-[30dvh] flex flex-col items-start gap-[1em] py-[2em] md:flex-row md:items-center md:gap-[3em]">
          <Logo />
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
