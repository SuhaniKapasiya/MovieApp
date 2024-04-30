import React, { useState, useEffect } from "react";
import data from "./data/movies";
import MovieList from "./components/MovieList";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filters, setFilters] = useState({});

  useEffect(() => {
    setMovies(data);
    
    setFilteredMovies(data);
  }, []);

  // Handle checkbox change event
  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFilters({
      ...filters,
      [name]: checked,
    });
  };

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
      <h1>Movies</h1>
      <div>
        <label>
          <input
            type="checkbox"
            name="language"
            value="Hindi"
            checked={filters.language === "Hindi"}
            onChange={handleCheckboxChange}
          />
          Hindi
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="English"
            checked={filters.language === "English"}
            onChange={handleCheckboxChange}
          />
          English
        </label>
        {/* Add checkboxes for other languages */}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="country"
            value="India"
            checked={filters.country === "India"}
            onChange={handleCheckboxChange}
          />
          India
        </label>
        <label>
          <input
            type="checkbox"
            name="country"
            value="United States"
            checked={filters.country === "United States"}
            onChange={handleCheckboxChange}
          />
          United States
        </label>
        {/* Add checkboxes for other countries */}
      </div>
      <div>
        <label>
          <input
            type="checkbox"
            name="genre"
            value="Action"
            checked={filters.genre === "Action"}
            onChange={handleCheckboxChange}
          />
          Action
        </label>
        <label>
          <input
            type="checkbox"
            name="genre"
            value="Drama"
            checked={filters.genre === "Drama"}
            onChange={handleCheckboxChange}
          />
          Drama
        </label>
        {/* Add checkboxes for other genres */}
      </div>
      <ul>
        {filteredMovies.map((movie, index) => (
          <MovieList key={index} movie={movie} />
        ))}
      </ul>
    </div>
  );
};

export default App;
