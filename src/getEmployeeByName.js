const data = require('../data/zoo_data');

function getEmployeeByName(empName) {
  const { employees } = data;

  if (empName === undefined) {
    return {};
  }
  return employees
    .find((employee) => (employee.firstName === empName || employee.lastName === empName));
}

module.exports = getEmployeeByName;
