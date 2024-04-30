import React, { useState, useEffect } from "react";
import data from "./data/movies";
import MovieList from "./components/MovieList";
import Navbar from "./components/Navbar";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({
    language: "",
    country: "",
    genre: "",
  });

  useEffect(() => {
    setMovies(data);
    setFilteredMovies(data);
  }, []);

  // Extract languages, countries, and genres from the movie data
  const languages = [...new Set(data.flatMap((movie) => movie.movielanguages))];
  const countries = [...new Set(data.flatMap((movie) => movie.moviecountries))];
  const genres = [...new Set(data.flatMap((movie) => movie.moviegenres))];

  // Filter movies based on selected criteria
  useEffect(() => {
    let filtered = [...movies];

    if (filters.language) {
      filtered = filtered.filter((movie) =>
        movie.movielanguages.includes(filters.language)
      );
    }

    if (filters.country) {
      filtered = filtered.filter((movie) =>
        movie.moviecountries.includes(filters.country)
      );
    }

    if (filters.genre) {
      filtered = filtered.filter((movie) =>
        movie.moviegenres.includes(filters.genre)
      );
    }

    setFilteredMovies(filtered);
  }, [filters, movies]);

  return (
    <div>
      <Navbar
        filters={filters}
        setFilters={setFilters}
        languages={languages}
        countries={countries}
        genres={genres}
      />
      <div className="bg-gray-700 text-white p-4">
        <h1>Movies</h1>
        <ul className="flex flex-wrap">
          {filteredMovies.length ?  filteredMovies.map((movie, index) => (
            <li key={index} className="m-2">
              <MovieList movie={movie}  data ={data} />
            </li>
          )):  data.map((movie, index) => (
            <li key={index} className="m-2">
              <MovieList movie={movie}  data ={data} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;
