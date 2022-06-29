import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolioStock, setPortfolioStock] = useState([])



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



  return (
    <div>
      <SearchBar stocks={stocks} setStocks={setStocks} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} setStocks={setStocks} handleStock={handleBoughtStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStock={portfolioStock} setPortfolioStock={setPortfolioStock} handleStock={handleSellStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
