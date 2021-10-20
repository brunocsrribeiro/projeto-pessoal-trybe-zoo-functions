const { employees, species } = require('../data/zoo_data');

const getName = (obj) => employees
  .find((employ) => (employ.firstName === obj || employ.lastName === obj || employ.id === obj));

const getSpecieName = (animal) => species.find((specie) => specie.id === animal);

const createObj = (arg) => ({
  id: getName(arg).id,
  fullName: `${getName(arg).firstName} ${
    getName(arg).lastName
  }`,
  species: getName(arg)
    .responsibleFor.map((el) => getSpecieName(el).name),
  locations: getName(arg)
    .responsibleFor.map((el) => getSpecieName(el).location),
});

const xxx = (y) => employees
  .some((employ) => (employ.firstName === y || employ.lastName === y || employ.id === y));

const validate = (person) => {
  if (xxx(person)) {
    return createObj(person);
  }

  throw new Error('Informações inválidas');
};

function getEmployeesCoverage(stress) {
  // seu código aqui
  if (!stress) { return employees.map((el) => createObj(el.firstName)); }
  const { name, id } = stress;
  if (!id) { return validate(name); }
  return validate(id);
}

// console.log(getEmployeesCoverage({ id: 'c1f50212-35a6-4ecd-8223-f835538526c2' }));
// console.log(obj('Sharonda'));

// const pessoa1 = getName("Sharonda");
// pessoa1.responsibleFor.map((el) => getSpecieName(el).name);
// pessoa1.responsibleFor.map((el) => getSpecieName(el).location);

module.exports = getEmployeesCoverage;
