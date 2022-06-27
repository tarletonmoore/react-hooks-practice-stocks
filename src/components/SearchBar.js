import React, { useState } from "react";

function SearchBar({ stocks, setStocks }) {
  const [category, setCategory] = useState("Tech")

  // function categoryChange() {
  //   const filteredStocks = stocks.filter((stock) => stock.type === category)
  //   setStocks(filteredStocks)
  // }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}

        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        // {null}
        >
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
