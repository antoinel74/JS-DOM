function computeChange(price, moneyHanded) {
  let returnChange = moneyHanded - price;
}

// TESTING
// An item costs 12,30€
// We hand a 50€ bill
const change1 = computeChange(12.3, 50);

// Should return 37,70€
// 1x20, 1x10, 1x5, 1x2, 1x0.5, 1x0.2
console.log(change1); // [20, 10, 5, 2, 0.5, 0.2]

const change2 = computeChange(17.41, 20);
console.log(change2); // [2, 0.5, 0.05, 0.02, 0.02]
