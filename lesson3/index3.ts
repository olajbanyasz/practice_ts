function LogMethodCalls<T extends new (...args: unknown[]) => object>(constructor: T) {
  return class extends constructor {
    constructor(...args: unknown[]) {
      super(...args);
      const proto = constructor.prototype;

      Object.getOwnPropertyNames(proto).forEach((key) => {
        const descriptor = Object.getOwnPropertyDescriptor(proto, key);
        if (!descriptor || key === 'constructor' || typeof descriptor.value !== 'function') {
          return;
        }

        const originalMethod = descriptor.value;

        Object.defineProperty(this, key, {
          value: function (...methodArgs: unknown[]) {
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

@LogMethodCalls
class Calculator {
  add(a: number, b: number): number {
    return a + b;
  }

  subtract(a: number, b: number): number {
    return a - b;
  }

  multiply(a: number, b: number): number {
    return a * b;
  }

  divide(a: number, b: number): number {
    if (b === 0) {
      throw new Error('Cannot divide by zero');
    }
    return a / b;
  }
}

export default Calculator;

const calculator = new Calculator();
console.log(calculator.add(5, 10));
console.log(calculator.subtract(10, 5));
console.log(calculator.multiply(5, 10));
console.log(calculator.divide(10, 5));
