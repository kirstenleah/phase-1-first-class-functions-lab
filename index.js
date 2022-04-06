// Code your solution in this file!
const returnFirstTwoDrivers = function(anArray) {
    return anArray.slice(0, 2);
};

const returnLastTwoDrivers = function(anArray) {
    return anArray.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(multiplyFare) {
    return function (fare) {
        return multiplyFare * fare;
    };
};


const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (anArray, driversToReturn) {
    return driversToReturn(anArray);
};
