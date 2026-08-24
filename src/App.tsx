import { Outlet, useLocation } from "react-router-dom";

import Logo from "./components/Explore/Logo";
import SearchBar from "./components/Explore/SearchBar";

function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const showHeader = !isHome;

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

      <main className="min-h-[60vh]">
        <Outlet />
      </main>

      <footer></footer>
    </div>
  );
}

export default App;
