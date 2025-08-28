export default function add(a: number, b: number): number {
    return a + b;
}

export function multiply(a: number, b: number): number {
    return a * b;
}

let sum = add(2, 3);
let product = multiply(4, 5);
console.log(`Product: ${product}`);
console.log(`Sum: ${sum}`);
