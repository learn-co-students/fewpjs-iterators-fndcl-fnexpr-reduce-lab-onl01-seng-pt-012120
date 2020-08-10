const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
function aggregate(sum, ele)
{
  return sum += ele
}

const totalBatteries = batteryBatches.reduce(aggregate,0)
