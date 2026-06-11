interface Admin {
    name: string;
    privileges: string[];
}

interface Employee {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

function createElevatedEmployee(name: string, privileges: string[], startDate: Date): ElevatedEmployee {
    return {
        name,
        privileges,
        startDate
    };
}

const elevatedEmployee = createElevatedEmployee('Charlie', ['admin'], new Date());
console.log(elevatedEmployee);

type User = Admin | Employee;

function merge<T extends object, U extends object>(objA: T, objB: U): T & U {
    return Object.assign({}, objA, objB);
}

const admin: Admin = {
    name: "Alice",
    privileges: ["admin"]
};

const employee: Employee = {
    name: "Bob",
    startDate: new Date()
};

const mergedUser = merge(admin, employee);
console.log(mergedUser);

function isAdmin(user: User): user is Admin {
    return 'privileges' in user;
}

console.log(isAdmin(mergedUser) ? "User is an admin" : "User is not an admin");
console.log(isAdmin(employee) ? "Employee is an admin" : "Employee is not an admin");
console.log(isAdmin(admin) ? "Admin is an admin" : "Admin is not an admin");

function printEmployeeInformation(user: User) {
    if (isAdmin(user)) {
        console.log(`Admin: ${user.name}, Privileges: ${user.privileges.join(", ")}`);
    } else {
        console.log(`Employee: ${user.name}, Start Date: ${user.startDate}`);
    }
}

printEmployeeInformation(mergedUser);
printEmployeeInformation(employee);
printEmployeeInformation(admin);