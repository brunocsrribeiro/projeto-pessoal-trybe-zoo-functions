const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageGroup = {
    adult: 0,
    senior: 0,
    child: 0,
  };

  entrants.forEach((entrant) => {
    if (entrant.age < 18) {
      ageGroup.child += 1;
    } else if (entrant.age >= 18 && entrant.age < 50) {
      ageGroup.adult += 1;
    } else {
      ageGroup.senior += 1;
    }
  });
  return ageGroup;
}

function calculateEntry(entrants) {
  if (!entrants || Object.values(entrants).length === 0) {
    return 0;
  }
  const sum = [];
  const total = (acc, curr) => acc + curr;
  countEntrants(entrants);

  sum.push(Object.values(countEntrants(entrants))[0] * Object.values(prices)[0]);

  sum.push(Object.values(countEntrants(entrants))[1] * Object.values(prices)[1]);

  sum.push(Object.values(countEntrants(entrants))[2] * Object.values(prices)[2]);

  return sum.reduce(total);
}

module.exports = { calculateEntry, countEntrants };
