export default function createReportObject(employeesList) {  
const allEmployees = {}; 
 employeesList.forEach((employee) => {   
 if (!allEmployees[employee.department]) {     
       allEmployees[employee.department] = [];  
  }  
  allEmployees[employee.department].push(employee.name);
  });  
 const reportObject = {    allEmployees,    
 getNumberOfDepartments() {    
  return Object.keys(allEmployees).length;
   },
  }; 
 return reportObject;
} 
