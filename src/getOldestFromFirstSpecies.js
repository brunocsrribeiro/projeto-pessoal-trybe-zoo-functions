const { employees, species } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const specieId = employees
    .find((employee) => employee.id === id)
    .responsibleFor.find((responsible) => responsible);

  return species
    .find((specie) => specie.id === specieId)
    .residents.sort((specieA, specieB) => specieB.age - specieA.age)
    .map(({ name, sex, age }) => [name, sex, age])[0];
}

module.exports = getOldestFromFirstSpecies;
