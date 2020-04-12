const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here


let totalBatteries = 0;

function reducer(batteryBatches){
  
  batteryBatches.reduce(function(total, element){
    total + element;
  }, 0)
  return totalBatteries.push(batteryBatches)
}

