var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function LogMethodCalls(constructor) {
    return class extends constructor {
        constructor(...args) {
            super(...args);
            const proto = constructor.prototype;
            Object.getOwnPropertyNames(proto).forEach((key) => {
                const descriptor = Object.getOwnPropertyDescriptor(proto, key);
                if (!descriptor || key === 'constructor' || typeof descriptor.value !== 'function') {
                    return;
                }
                const originalMethod = descriptor.value;
                Object.defineProperty(this, key, {
                    value: function (...methodArgs) {
                        console.log(`Called ${key} with`, methodArgs);
                        return originalMethod.apply(this, methodArgs);
                    },
                    writable: true,
                    configurable: true,
                });
            });
        }
    };
}
let Calculator = class Calculator {
    add(a, b) {
        return a + b;
    }
    subtract(a, b) {
        return a - b;
    }
    multiply(a, b) {
        return a * b;
    }
    divide(a, b) {
        if (b === 0) {
            throw new Error('Cannot divide by zero');
        }
        return a / b;
    }
};
Calculator = __decorate([
    LogMethodCalls
], Calculator);
export default Calculator;
const calculator = new Calculator();
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(5, 10));
console.log(calculator.divide(10, 5));
//# sourceMappingURL=index3.js.map