// Write your solution in this file!
console.log("hello");
const employee = {name:'Sam',
    streetAddress: '11 Broadway'
}

function updateEmployeeWithKeyAndValue(obj, key, value){
    return Object.assign({}, obj, {[key]: value});
}

function   destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}


function deleteFromEmployeeByKey(employee, key){
       const newEmployee = { ... employee }
    delete newEmployee[key];
     return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}

