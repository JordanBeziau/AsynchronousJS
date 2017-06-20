function getStockSymbols(stocks) {
  return stocks.map((stock) => {
    return stock.symbol;
  });
}

/* What .map() is doing here :
Array.prototype.map = function(projection) {
  const results = [];

  this.forEach(function(item) {
    results.push(projection(item));
  });
  return results;
}
*/

const symbols = getStockSymbols([
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 }
]);

console.log(JSON.stringify(symbols));
