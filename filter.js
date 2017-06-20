function getStocksOver(stocks, minPrice) {
  return stocks.filter((stock) => {
    return stock.price >= minPrice;
  });
}

/* What .filter() is doing here :
Array.prototype.filter = function(predicate) {
  const results = [];
  this.forEach((item) => {
    if (predicate(item)) {
      results.push(item);
    }
  });
  return results;
}
*/

const expensiveStocks = getStocksOver([
  { symbol: "XFC", price: 122.34, volume: 230 },
  { symbol: "XFC", price: 173.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 }
  ],
  150
);

console.log(JSON.stringify(expensiveStocks));
