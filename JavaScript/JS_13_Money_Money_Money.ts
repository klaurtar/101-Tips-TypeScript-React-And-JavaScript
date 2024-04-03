const money = 68743.38275;

// Do this ✅
new Intl.NumberFormat('en-us', { style: 'currency', currency: 'USD' }).format(
  money
);
// Expected output: "$68,743.38"

// Need it in yen?
new Intl.NumberFormat('ja-jp', { style: 'currency', currency: 'JPY' }).format(
  money
);
// Expected output: "￥68,743"

// Need it in rupees?
new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(
  money
);
// Expected output: "₹68,743.38"

// Need it to round up, with no commas?
new Intl.NumberFormat('en-us', {
  style: 'currency',
  currency: 'USD',
  useGrouping: false,
  roundingMode: 'ceil',
}).format(money);
// Expected output: '$68743.39'
