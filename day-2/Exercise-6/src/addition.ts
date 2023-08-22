// Define a function that calculates the average of an array of numbers
function calculateAverage(numbers: number[]): number {
    let sum = 0;

    // Loop through the numbers array
    //Here I have added one logical error 
    // loop condition should be i < numbers.length instead of i <= numbers.length.
    // And I have resolved the error by debugging
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    // Calculate the average by dividing the sum by the number of elements
    return sum / numbers.length;
}

// Create an array of numbers   
const numbers = [10, 20, 30, 40, 50];
// Call the calculateAverage function to get the average of the numbers
const average = calculateAverage(numbers);
// Display the calculated average
console.log(`Average: ${average}`);