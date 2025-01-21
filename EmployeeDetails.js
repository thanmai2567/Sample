function updateEmployeeDetails(employee, newRole,loc) {
    
    return { ...employee, role: newRole,location: loc };
  }
  const employee = { name: 'Afroz', role: 'Developer', age: 28, location: 'IN' };


  const updatedEmployee = updateEmployeeDetails(employee, 'Senior Developer','on');
  
  console.log(updatedEmployee);