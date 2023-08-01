// Code your solution in this file!
const hqBlock = 42;

function distanceFromHqInBlocks(startBlock) {
  const numberOfBlocks = parseInt(startBlock);
  return Math.abs(numberOfBlocks - hqBlock);
}

function distanceFromHqInFeet(startBlock) {
  let numberOfFeet = 0;
  numberOfFeet = distanceFromHqInBlocks(startBlock) * 264;
  return numberOfFeet;
}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blocksTraveledInFeet = Math.abs(startBlock - endBlock) * 264;
  return blocksTraveledInFeet;
}

function calculatesFarePrice(startBlock, endBlock) {
  let fareDistance = distanceTravelledInFeet(startBlock, endBlock);
  let farePrice;

  if (fareDistance <= 400) {
    return 0;
  } else if (fareDistance > 400 && fareDistance <= 2000) {
    farePrice = (fareDistance - 400) * 0.02;
  } else if (fareDistance > 2000 && fareDistance <= 2500) {
    farePrice = 25;
  } else {
    farePrice = "cannot travel that far";
  }

  return farePrice;
}
