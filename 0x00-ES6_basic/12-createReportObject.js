import createEmployeesObject from './11-createEmployeesObject.js';

export default function createReportObject(employeesList) {
  return {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(empList) {
      return Object.keys(empList).length;
    },
  };
}
