const exchanges = [
  {
    stocks: [
      { symbol: "XFC", price: 120.34, volume: 367 },
      { symbol: "VFT", price: 170.34, volume: 27389 }
    ]
  },
  {
    stocks : [
      { symbol: "XSY", price: 220.34, volume: 31 },
      { symbol: "JYS", price: 345.24, volume: 7389 }
    ]
  }
];

Array.prototype.concatAll = function() {
  const results = [];

  this.forEach(subArray => {
    subArray.forEach(item => {
      results.push(item);
    });
  });

  return results;
};

const stocks =
  exchanges
    .map(exchange => {
      return exchange.stocks
        .filter(stock => {
          return stock.price >= 100.00;
        });
    }).concatAll();

stocks.forEach(stock => console.log(stock));
