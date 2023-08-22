// This function can take parameter as string or array
// and return its length.
function getLength(input: string | any[]): number {
    return input.length;
}

const strLength = getLength("Hello, TypeScript!");
console.log("String length:", strLength);

const arrLength = getLength([1, 2, 3, 4, 5]);
console.log("Array length:", arrLength);





