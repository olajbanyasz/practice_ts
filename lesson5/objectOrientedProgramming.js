class Person {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
class Student extends Person {
    grade;
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
    getStudentInfo() {
        return `${this.getFullName()} - Grade: ${this.grade}`;
    }
}
const people = [
    new Person('Anna', 'Nagy'),
    new Student('Bence', 'Kiss', 5),
    new Person('Csilla', 'Tóth')
];
people.forEach((person) => {
    if (person instanceof Student) {
        console.log(person.getStudentInfo());
    }
    else {
        console.log(person.getFullName());
    }
});
export {};
//# sourceMappingURL=objectOrientedProgramming.js.map