// Write your solution in this file!
const employee = {
    name: 'Noel',
    streetAddress: '568 Nairobi'
}

function updateEmployeeWithKeyAndValue() {
    const nEmployee = {
        ...employee,
        name: 'Sam',
        streetAddress: '11 Broadway'
    };
    return nEmployee;
}
function destructivelyUpdateEmployeeWithKeyAndValue() {
    employee.name = 'Sam'
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const dEmployee = {
        ...employee[key]
    };
    delete dEmployee[key];
    return dEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}
