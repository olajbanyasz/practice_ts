function sumWithOptionalDivision(numbers, divisor) {
    const sum = numbers.reduce((acc, num) => acc + num, 0);
    return divisor ? sum / divisor : sum;
}
export default sumWithOptionalDivision;
console.log(sumWithOptionalDivision([1, 2, 3, 4, 5]));
console.log(sumWithOptionalDivision([1, 2, 3, 4, 5], 2));
//# sourceMappingURL=index2.js.map