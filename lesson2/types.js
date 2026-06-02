function createElevatedEmployee(name, privileges, startDate) {
    return {
        name,
        privileges,
        startDate
    };
}
function merge(objA, objB) {
    return Object.assign({}, objA, objB);
}
const admin = {
    name: "Alice",
    privileges: ["admin"]
};
const employee = {
    name: "Bob",
    startDate: new Date()
};
const mergedUser = merge(admin, employee);
console.log(mergedUser);
function isAdmin(user) {
    return 'privileges' in user;
}
console.log(isAdmin(mergedUser) ? "User is an admin" : "User is not an admin");
console.log(isAdmin(employee) ? "Employee is an admin" : "Employee is not an admin");
console.log(isAdmin(admin) ? "Admin is an admin" : "Admin is not an admin");
function printEmployeeInformation(user) {
    if (isAdmin(user)) {
        console.log(`Admin: ${user.name}, Privileges: ${user.privileges.join(", ")}`);
    }
    else {
        console.log(`Employee: ${user.name}, Start Date: ${user.startDate}`);
    }
}
printEmployeeInformation(mergedUser);
printEmployeeInformation(employee);
printEmployeeInformation(admin);
export {};
//# sourceMappingURL=types.js.map