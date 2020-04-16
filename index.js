const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
// Code your solution here 

function batteries(total, element){
    return element + total;
};

function reducer(){
    let totalBatteries = batteryBatches.reduce(batteries);
    return totalBatteries;
};

let totalBatteries = batteryBatches.reduce(batteries);