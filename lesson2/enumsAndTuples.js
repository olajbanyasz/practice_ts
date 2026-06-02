var Role;
(function (Role) {
    Role["ADMIN"] = "ADMIN";
    Role["AUTHOR"] = "AUTHOR";
    Role["READ_ONLY"] = "READ_ONLY";
})(Role || (Role = {}));
function createUser(username, role) {
    return [username, role, new Date()];
}
const user1 = createUser("Alice", Role.ADMIN);
const user2 = createUser("Bob", Role.AUTHOR);
console.log("User 1: ", user1);
console.log("User 2: ", user2);
export {};
//# sourceMappingURL=enumsAndTuples.js.map