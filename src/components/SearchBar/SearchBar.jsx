import React from "react";
import "./SearchBar.css";
const SearchBar = () => {
  return (
    <div className="container d-flex justify-content-center  mb-5 ">
      <input
        className="form-control me-2"
        type="search"
        placeholder="Search Exercises"
        aria-label="Search"
      />
      <button
        onClick={() => {}}
        className="btn btn-danger btn-style"
        type="submit"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
