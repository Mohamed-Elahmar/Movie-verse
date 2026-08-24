import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import ExplorePage from "./pages/ExplorePage";
import MovieDetails from "./pages/MovieDetails";
import SearchResults from "./components/Explore/SearchResults";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "explore",
        element: <ExplorePage />,
        children: [{ path: "search-results", element: <SearchResults /> }],
      },
      { path: "movie/:movieId", element: <MovieDetails /> },
    ],
  },
]);

export default router;
