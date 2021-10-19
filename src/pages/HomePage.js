import React, { useContext } from "react";

import { Link } from "react-router-dom";

import Search from "../components/Search";
import { MovieContext } from "../context/MovieContext";
import MoviesItem from "../components/MoviesItem";
import "../styles/Home.css";

const HomePage = () => {
    const { setSearch, movies } = useContext(MovieContext);
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    return (
        <div className="home-container" >
            <Search handleSearch={handleSearch} />
            {movies?.length > 0 ? (
                <div className="movies">
                    {movies?.map((movie) => {
                        return (
                            <Link
                                to={`movies/${movie.imdbID}`}
                                className="text-link"
                                key={movie.imdbID}
                            >
                                <MoviesItem
                                    key={movie.imdbID}
                                    image={movie.Poster}
                                    title={movie.Title}
                                    year={movie.Year}
                                />
                            </Link>
                        );
                    })}
                </div>
            ) : (
                <div className="search-warning">
                    <p>Start searching!</p>
                </div>
            )}
        </div>
    );
};

export default HomePage;
