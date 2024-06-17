import React from "react";

function CategoryFilter({CATEGORIES}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      <button> {CATEGORIES} </button>
    </div>
  );
}

export default CategoryFilter;
