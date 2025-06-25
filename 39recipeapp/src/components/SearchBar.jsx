import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    const val = e.target.value;
    setQuery(val);
    onSearch(val);
  };

  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Search recipes..."
      value={query}
      onChange={handleChange}
    />
  );
};

export default SearchBar;
