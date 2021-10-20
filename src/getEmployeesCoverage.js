const { employees, species } = require('../data/zoo_data');

// Este requisito foi desenvolvido com a ajuda do colega Bruno Marques
// https://github.com/blmarquess
// Retorna um objeto de uma pessoa pelo nome, sobrenome ou Id passado como argumento na funcao
const getObjectPerson = (person) => employees
  .find((emp) => (emp.firstName === person || emp.lastName === person || emp.id === person));

// Retorna o objeto de uma especie a partir do Id passado como argumento da funcao
const getObjectSpecies = (objSpecies) => species.find((specie) => specie.id === objSpecies);

// Essa funcao cria um objeto, utilizando callbacks para atribuir valores as chaves do objeto
const createdObj = (objectInfo) => ({
  id: getObjectPerson(objectInfo).id,
  fullName: `${getObjectPerson(objectInfo).firstName} ${
    getObjectPerson(objectInfo).lastName
  }`,
  species: getObjectPerson(objectInfo)
    .responsibleFor.map((elName) => getObjectSpecies(elName).name),
  locations: getObjectPerson(objectInfo)
    .responsibleFor.map((elLocation) => getObjectSpecies(elLocation).location),
});

// Essa funcao auxilia criacao da regra de negocio da funcao validate
const businessRules = (rules) => employees
  .some((emp) => (emp.firstName === rules || emp.lastName === rules || emp.id === rules));

//  Essa funcao valida se algum argumento é passado para o funcao getEmployeesCoverage, caso não, seja ela retorna um erro
const validatedInfo = (personsInfo) => {
  if (businessRules(personsInfo)) { return createdObj(personsInfo); }

  throw new Error('Informações inválidas');
};

// Essa funcao valida se e passado algum argumento e retorna um objeto com as informacoes
function getEmployeesCoverage(objectOfCover) {
  if (!objectOfCover) { return employees.map((el) => createdObj(el.firstName)); }

  const { name, id } = objectOfCover;

  if (!id) { return validatedInfo(name); }
  return validatedInfo(id);
}

module.exports = getEmployeesCoverage;
