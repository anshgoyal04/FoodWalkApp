import React from "react";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="max-w-md mx-auto mt-6 mb-4 px-4">
      <input
        type="text"
        placeholder="Search a city..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full px-4 py-2 border rounded shadow"
      />
    </div>
  );
};

export default SearchBar;
