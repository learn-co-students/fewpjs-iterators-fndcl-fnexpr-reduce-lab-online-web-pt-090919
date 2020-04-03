const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteryAmt = (total, val) => {
  return total + val
}

let totalBatteries = batteryBatches.reduce(totalBatteryAmt, 0)
