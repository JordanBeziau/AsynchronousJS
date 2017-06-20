const stocks = [
  { symbol: "XFC", price: 120.34, volume: 230 },
  { symbol: "VFT", price: 170.34, volume: 230 },
  { symbol: "XSY", price: 220.34, volume: 230 }
];

const filteredStockSymbols =
  stocks
    .filter((stock) => {
      return stock.price >= 150.00;
    })
    .map((stock) => {
      return stock.symbol;
    });

filteredStockSymbols.forEach((symbol) => {
  console.log(symbol);
});
