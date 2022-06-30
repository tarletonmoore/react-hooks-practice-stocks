import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStock, setPortfolioStock] = useState([])
  const [category, setCategory] = useState("Tech")
  const [sort, setSort] = useState("Alphabetically")




  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then((response) => response.json())
      .then((data) => setStocks(data))

  }, [])


  function handleBoughtStock(stockToBuy) {
    const boughtStock = portfolioStock.find((stock) => stock.id === stockToBuy.id)
    if (!boughtStock)
      setPortfolioStock([...portfolioStock, stockToBuy])
  }

  function handleSellStock(stockToSell) {
    // const soldStock = portfolioStock.filter((stock) => stock.id === !stockToSell.id)
    setPortfolioStock(portfolioStock.filter((stock) => stock.id !== stockToSell.id))

  }

  // function filterThroughStocks(e) {
  //   const categoryFilter = stocks.filter((stock) => stock.type.toLowerCase() === e.target.value.toLowerCase())
  //   setStocks(categoryFilter)
  // }

  // const sortStocks = stocks.sort((a, b) => a.name.localeCompare(b.name))
  // const sortPrice = stocks.sort((a, b) => (a.price - b.price))

  // const categoryFilter = sortStocks.filter((stock) => stock.type.toLowerCase() === category.toLowerCase()) || sortPrice.filter((stock) => stock.type.toLowerCase() === category.toLowerCase())

  // function conditionSort() {
  //   if (sort === "Alphabetically") {
  //     return sortStocks.filter((stock) => stock.type.toLowerCase() === category.toLowerCase())
  //   }
  //   else if (sort === "Price") {
  //     return sortPrice.filter((stock) => stock.type.toLowerCase() === category.toLowerCase())
  //   }
  // }

  const sortedStocks = [...stocks].sort((a, b) => {
    if (sort === "Alphabetically") { return a.name.localeCompare(b.name) }
    else { return a.price - b.price }
  })

  const filteredStocks = sortedStocks.filter(
    (stock) => stock.type.toLowerCase() === category.toLowerCase())

  return (
    <div>
      <SearchBar category={category} setCategory={setCategory} setSort={setSort} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filteredStocks} handleStock={handleBoughtStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStock={portfolioStock} setPortfolioStock={setPortfolioStock} handleStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
