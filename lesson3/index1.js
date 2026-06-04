function combine(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    else {
        throw new Error("Invalid arguments. Both arguments must be either numbers or strings.");
    }
}
export default combine;
console.log(combine(5, 10));
console.log(combine("Hello, ", "world!"));
//# sourceMappingURL=index1.js.map