import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStock, setPortfolioStock }) {

  const portfolioDisplay = portfolioStock.map((stock) => <Stock key={stock.id} stock={stock} />)

  // function sellClick() {
  //   handleSellStock(!portfolioStock.id)
  // }

  function handleSellStock(stockToSell) {
    // const soldStock = portfolioStock.filter((stock) => stock.id === !stockToSell.id)
    const soldStock = portfolioStock.filter((stock) => stock.id !== stockToSell.id)
    if (!soldStock)
      setPortfolioStock([...portfolioStock])

  }

  return (
    <div onClick={handleSellStock}>
      <h2>My Portfolio</h2>
      {
        portfolioDisplay

      }
    </div>
  );
}

export default PortfolioContainer;
