const { species } = require('../data/zoo_data');

function countAnimals(animal) {
  if (!animal) {
    return species.reduce((acc, specie) => {
      Object.assign(acc, { [specie.name]: specie.residents.length });
      return acc;
    }, {});
  }

  if (!animal.sex) {
    return species
      .find((specie) => specie.name === animal.specie)
      .residents.length;
  }
  return species.find((specie) => specie.name === animal.specie)
    .residents.filter((specieSex) => specieSex.sex === animal.sex)
    .length;
}

module.exports = countAnimals;
