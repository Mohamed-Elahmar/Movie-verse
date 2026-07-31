import { Routes, Route } from "react-router";

import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Logo from "./components/Home/Logo";
import SearchBar from "./components/Home/SearchBar";

function App() {
  return (
    <div className="box-border bg-black text-indigo-500 px-[4em] py-[2em]">
      <header className="h-[30dvh] flex flex-col items-start gap-[1em] py-[2em] md:flex-row md:items-center md:gap-[3em]">
        <Logo />
        <SearchBar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:movieId" element={<MovieDetails />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
