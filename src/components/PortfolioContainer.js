import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ portfolioStock, setPortfolioStock, handleStock }) {

  const portfolioDisplay = portfolioStock.map((stock) => <Stock key={stock.id} stock={stock} onHandleStock={handleStock} />)

  // function sellClick() {
  //   handleSellStock(!portfolioStock.id)
  // }

  // function handleSellStock(stockToSell) {
  //   // const soldStock = portfolioStock.filter((stock) => stock.id === !stockToSell.id)
  //   const soldStock = portfolioStock.filter((stock) => stock.id !== stockToSell.id)
  //   if (soldStock)
  //     setPortfolioStock(portfolioDisplay, soldStock)

  // }

  return (
    <div >
      <h2>My Portfolio</h2>
      {
        portfolioDisplay

      }
    </div>
  );
}

export default PortfolioContainer;
