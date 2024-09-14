import React, { useState } from "react";
import countries from "./countries"; // Import the JSON data

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  // Handle search input
  const handleInputChange = (event) => {
    const query = event.target.value;
    setSearchTerm(query);

    // Filter the countries based on input
    if (query.length > 0) {
      const filteredSuggestions = countries.filter(
        (country) =>
          country.country.toLowerCase().includes(query.toLowerCase()) ||
          country.capital.toLowerCase().includes(query.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search by country or capital..."
        className="search-input"
      />
      {suggestions.length > 0 && (
        <ul className="suggestions-list">
          {suggestions.map((suggestion, index) => (
            <li key={index} className="suggestion-item">
              <strong>{suggestion.country}</strong> - {suggestion.capital}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
