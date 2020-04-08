const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

function totalBatteries(){
  let total = 0;
  return batteryBatches.reduce(function(total, element){
    return total += element
  })
}
