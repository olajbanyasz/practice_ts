enum Role {
    "ADMIN" = "ADMIN",
    "AUTHOR" = "AUTHOR",
    "READ_ONLY" = "READ_ONLY"
}

type UserData = [username: string, role: Role, creationDate: Date];

function createUser(username: string, role: Role): UserData {
    return [username, role, new Date()];
}

const user1 = createUser("Alice", Role.ADMIN);
const user2 = createUser("Bob", Role.AUTHOR);

console.log("User 1: ", user1);
console.log("User 2: ", user2);