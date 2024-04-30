import React from "react";

const Navbar = ({ filters, setFilters, languages, countries, genres }) => {
  const handleFilterChange = (filterType, filterValue) => {
    setFilters({
      ...filters,
      [filterType]: filterValue,
    });
  };

  return (
    <nav className="bg-gray-800 text-white py-4 px-6 flex justify-between items-center">
      <div>
        <button
          className="mr-4"
          onClick={() => handleFilterChange("language", "")}
        >
          All Languages
        </button>
        {languages.map((language) => (
          <button
            key={language}
            className={`mr-4 ${
              filters.language === language ? "bg-blue-500" : ""
            }`}
            onClick={() => handleFilterChange("language", language)}
          >
            {language}
          </button>
        ))}
      </div>
      <div>
        <button
          className="mr-4"
          onClick={() => handleFilterChange("country", "")}
        >
          All Countries
        </button>
        {countries.map((country) => (
          <button
            key={country}
            className={`mr-4 ${
              filters.country === country ? "bg-blue-500" : ""
            }`}
            onClick={() => handleFilterChange("country", country)}
          >
            {country}
          </button>
        ))}
      </div>
      <div>
        <button
          className="mr-4"
          onClick={() => handleFilterChange("genre", "")}
        >
          All Genres
        </button>
        {genres.map((genre) => (
          <button
            key={genre}
            className={`mr-4 ${filters.genre === genre ? "bg-blue-500" : ""}`}
            onClick={() => handleFilterChange("genre", genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
