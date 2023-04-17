export default function iterateThroughObject(reportWithIterator) { 
 let employeeNames = '';  
const allEmployees = reportWithIterator.next().value.allEmployees; 
 for (const department in allEmployees) { 
   for (const employee of allEmployees[department]) {   
   employeeNames +=  ${employee} |  ;  
  } 
 } 
 return employeeNames.slice(0, -3);
} 

