interface PersonInterface {
    getFullName(): string;
}

class Person implements PersonInterface {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person implements PersonInterface {
    private grade: number;

    constructor(firstName: string, lastName: string, grade: number) {
        super(firstName, lastName);
        this.grade = grade;
    }

    public getStudentInfo(): string {
        return `${this.getFullName()} - Grade: ${this.grade}`;
    }
}

const people: PersonInterface[] = [
    new Person('Anna', 'Nagy'),
    new Student('Bence', 'Kiss', 5),
    new Person('Csilla', 'Tóth')
];

people.forEach((person) => {
    if (person instanceof Student) {
        console.log((person as Student).getStudentInfo());
    } else {
        console.log(person.getFullName());
    }
});

