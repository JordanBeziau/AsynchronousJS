const exchanges = [
  [
    { symbol: "XFC", price: 120.34, volume: 367 },
    { symbol: "VFT", price: 170.34, volume: 27389 }
  ],
  [
    { symbol: "XSY", price: 220.34, volume: 31 },
    { symbol: "JYS", price: 345.24, volume: 7389 }
  ]
];

/* What .concatAll() is doing here
Array.prototype.concatAll = function () {
  const results = [];
  this.forEach(subArray => {
    subArray.forEach(item => {
      results.push(item);
    });
  });
  return results;
};
*/

const stocks = exchanges.concatAll();

stocks.forEach(stock => console.log(JSON.stringify(stock)));
