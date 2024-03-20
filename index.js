function distanceFromHqInBlocks(pickupLocation) {
  const headquartersLocation = 42;
  const distanceInBlocks = Math.abs(pickupLocation - headquartersLocation);
  return distanceInBlocks;
}

function distanceFromHqInFeet(pickupLocation) {
  const blocks = distanceFromHqInBlocks(pickupLocation);
  const feetPerBlock = 264;
  const distanceFeet = blocks * feetPerBlock;
  return distanceFeet;
}

function distanceTravelledInFeet(startLocation, stopLocation) {
  const distanceBlocks = Math.abs(stopLocation - startLocation);
  const feetPerBlock = 264;
  const distanceFeet = distanceBlocks * feetPerBlock;
  return distanceFeet;
}

function calculatesFarePrice(start, destination) {
  const distanceTravelled = distanceTravelledInFeet(start, destination);

  if (distanceTravelled <= 400) {
      const farePrice = 0;
      return farePrice;
  } else if (distanceTravelled > 400 && distanceTravelled <= 2000) {
      const farePrice = (distanceTravelled - 400) * 0.02;
      return farePrice;
  } else if (distanceTravelled > 2000 && distanceTravelled <= 2500) {
      return 25;
  } else {
      return 'cannot travel that far';
  }
}


