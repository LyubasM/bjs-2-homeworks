"use strict";
function solveEquation(a, b, c) {
  let arr = [];
  let d = b ** 2 - 4 * a * c;

  if (d < 0) {
    return arr;
} else if (d === 0) { 
    arr.push(- b / (2 * a));
} else { 
    arr.push((- b + Math.sqrt(d)) / (2 * a), (- b - Math.sqrt(d) ) / (2 * a));
}
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
  let arr = [percent, contribution, amount, countMonths];
  for (let i = 0; i < arr.length; i++) {
    if (isNaN(arr[i])) {
      arr[i] = parseInt(arr[i]);
      if (isNaN(arr[i])) {
        return false;
      }
    }
  }

  percent = percent / 1200;

  let loanBody = amount - contribution;

  let payment = loanBody * (percent + (percent / (((1 + percent) ** countMonths) - 1)));

  let totalAmount = payment * countMonths;

  return +totalAmount.toFixed(2);
}