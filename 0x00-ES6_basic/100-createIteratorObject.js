export default function createIteratorObject(report) { 
 let departments = Object.values(report); 
 let employees = []; 
 for (let i = 0; i < departments.length; i++) {  
  employees.push(...Object.values(departments[i])); 
 }  
let index = 0;  
return { 
next: function() {   
   if (index < employees.length) {     
   return { value: employees[index++], done: false };   
   }
 else {   
     return { done: true };   
   }  
  };  
}
 
