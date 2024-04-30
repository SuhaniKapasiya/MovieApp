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
    const { name, checked, value } = event.target;
    console.log("checked: ", name, checked, value);
    // return
    setFilters({
      ...filters,
      [name]: value,
    });
    // console.log("filters: ", filters);
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
    <div className=" bg-gray-700 text-white">
      <h1>Movies</h1>
      <div>
      <label>
          <input
            type="checkbox"
            name="language"
            value="Malayalam"
            checked={filters.language === "Malayalam"}
            onChange={handleCheckboxChange}
          />
          Malayalam
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="Kannada"
            checked={filters.language === "Kannada"}
            onChange={handleCheckboxChange}
          />
          Kannada
        </label>
        <label>
          <input
            type="checkbox"
            name="language"
            value="Tamil"
            checked={filters.language === "Tamil"}
            onChange={handleCheckboxChange}
          />
          Tamil
        </label>
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
        <div className="flex bg-gray-700 flex-wrap">
          {filteredMovies.map((movie, index) => (
            <div key={index} className="flex">
              <MovieList movie={movie} />
            </div>
          ))}
        </div>
      </ul>
    </div>
  );
};

export default App;
