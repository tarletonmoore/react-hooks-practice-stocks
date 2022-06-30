import React from "react";

function SearchBar({ category, setCategory, setSort }) {
  // const [category, setCategory] = useState("")
  // const [filteredStocks, setFilteredStocks] = useState(stocks)

  function categoryChange(e) {
    // setFilteredStocks(stocks)
    setCategory(e.target.value)
    // setAllStocks(allStocks)

    // const categoryFilter = stocks.filter((stock) => stock.type.toLowerCase() === e.target.value.toLowerCase())

    // .includes(category.toLowerCase()))
    // === e.target.value.toLowerCase())
    // setStocks(stocks)
    // setFilteredStocks(categoryFilter)
    // setStocks(categoryFilter)

  }

  function handleSort(e) {
    setSort(e.target.value)

  }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked=
          {null}
          onChange={handleSort}
        // {null}

        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={handleSort}
        // {null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select
          value={category}
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
