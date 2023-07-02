import React from "react";

const SearchBar = () => {
  return (
    <div className="container d-flex justify-content-center mt-5 mb-5 ">
      <input
        type="text"
        placeholder="Search Exercises"
        className="form-control form-control-lg mx-2 "
      />
      <button
        onClick={() => {}}
        type="button"
        className=" btn btn-danger btn-lg  "
        style={{ width: "15%" }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
