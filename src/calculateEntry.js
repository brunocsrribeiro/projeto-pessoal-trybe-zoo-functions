const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  const ageGroup = {
    adult: entrants.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length,
    senior: entrants.filter((entrant) => entrant.age >= 50).length,
    child: entrants.filter((entrant) => entrant.age < 18).length,
  };
  return ageGroup;
}

function calculateEntry(entrants) {
  if (!entrants || Object.keys(entrants).length === 0) { return 0; }

  const persons = countEntrants(entrants);
  const sum = [];
  const total = (acc, curr) => acc + curr;

  sum.push(persons.adult * prices.adult);

  sum.push(persons.senior * prices.senior);

  sum.push(persons.child * prices.child);

  return sum.reduce(total);
}

module.exports = { calculateEntry, countEntrants };
