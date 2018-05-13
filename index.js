//produceDrivingRange() - Returns a function that then calculates
// whether a given trip is within range. For example,
// produceDrivingRange(10) returns a function that will return
//false if the trip is over 10 blocks distance and true if the
// distance is within range. So produceDrivingRange returns a
//function that we can then use to calculate if a trip is too large for
// a driver. We recommend referencing the test/indexTest.js for more details.

function produceDriveringRange(blockRange) {
  return function(startingBlock, endingBlock) -
  let distance = parseInt(endingBlock) - parseInt(startingBlock);
         let difference = blockRange - distance;
          if (difference > 0) {
              return `within range by ${difference}`;
          }
          else {
              return `${Math.abs(difference)} blocks out of range`;
          }
      }
  }

  function produceTipCalculator(tippingPercent) {
      return function (checkTotal) {
          return checkTotal * tippingPercent;
      }
  }

  function createDriver () {
      let DriverId = 0
      return class Driver {
          constructor(name) {
              this.name = name;
              this.id = ++DriverId;
          }
      }
  } 
