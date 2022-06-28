import React, { useState } from "react";

function SearchBar({ stocks, setStocks }) {
  const [category, setCategory] = useState("")

  function categoryChange(e) {
    const filteredStocks = stocks.filter((stock) => stock.type.toLowerCase().includes(category.toLowerCase()))
    setCategory(e.target.value)

    setStocks(filteredStocks)
  }


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange=
          {null}

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
          // value={category}
          onChange={categoryChange}
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
