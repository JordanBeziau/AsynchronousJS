
// Classic for version
function getStockSymbols(stocks) {
  const symbols = [];
  let count, stock;

  for (count = 0; count < stocks.length; count++) {
    stock = stocks[count];
    symbols.push(stock.symbol);
  }
  return symbols;
}

const symbols = getStockSymbols([
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 }
]);

console.log(JSON.stringify(symbols));

// forEach version
function getStockSymbols2(stocks) {
  const symbols = [];
  stocks.forEach((stock) => {
    symbols.push(stock.symbol);
  });
  return symbols;
}

const symbols2 = getStockSymbols2([
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 },
  { symbol: "XFC", price: 220.34, volume: 230 }
]);

console.log(JSON.stringify(symbols2));
