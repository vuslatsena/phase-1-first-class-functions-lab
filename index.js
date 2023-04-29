// Code your solution in this file!

const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, selectFn) {
  return selectFn(drivers);
};

const drivers = ["Vuslat", "Sena", "Emre", "Elizabeth"];

console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 

console.log(fareDoubler(10)); // Output: 20
console.log(fareTripler(10)); // Output: 30

console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers)); 
