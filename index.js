

// Code your solution here
let doubledAndSummed = [1, 2, 3].reduce(function(total, element){ 
  return element * 2 + total
}, 0)


const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const totalBatteries = batteryBatches.reduce(function(total, element) {
    return total + element
  }, 0)
