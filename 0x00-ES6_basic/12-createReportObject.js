import createEmployeesObject from './createEmployeesObject.js';

export default function createReportObject(employeesList) {
  const allEmployees = {};

  for (const employee of employeesList) {
    const { department, name } = employee;

    if (!allEmployees.hasOwnProperty(department)) {
      allEmployees[department] = [name];
    } else {
      allEmployees[department].push(name);
    }
  }

  return {
    allEmployees,
    getNumberOfDepartments: function() {
      return Object.keys(allEmployees).length;
    }
  };
}
