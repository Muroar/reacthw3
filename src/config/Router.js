import HomePage from "../pages/HomePage";
import MovieDetailsPage from "../pages/MovieDetailsPage";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <HomePage />,
    title: "Home",
    isHeaderElement: true,
  },
  {
    path: "/movies/:id",
    exact: false,
    component: <MovieDetailsPage />,
    title: "Detail",
    isHeaderElement: false,
  }
];
