import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, handleBoughtStock }) {

  // useEffect(() => {
  //   fetch("http://localhost:3001/stocks")
  //     .then((response) => response.json())
  //     .then((data) => setStocks(data))

  // }, [])

  const stockComponent = stocks.map((stock) => <Stock key={stock.id} stock={stock} handleBoughtStock={handleBoughtStock} />)


  return (
    <div>
      <h2>Stocks</h2>
      {stockComponent}
    </div>
  );
}

export default StockContainer;
