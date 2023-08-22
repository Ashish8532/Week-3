// the myArray function counts the number of occurrences
// of each element and returns it as an object. 
function myArray(arr) {
    const arrayCount = {};
    for (const element of arr) {
        if (arrayCount[element]) {
            arrayCount[element]++;
        }
        else {
            arrayCount[element] = 1;
        }
    }
    return arrayCount;
}

// array with repeated values.
const array = [1, 2, 1, 4, 3, 3, 2, 5, 6, 7, 4, 6, 8, 6, 8, 7, 2, 3, 4, 1];
const result = myArray(array);
console.log(typeof(result));
console.log(result);

// this function reverseString take input string as parameter
// and returns a reversed string.
function reverseString(str)
{
    // Create an empty string that will store the new reversed string
    let reversedString ="";

    // Here in loop I have initialized the starting point from last position of string 
    // As long as i is greater than or equals 0, the loop will go on
    // and decrement i after each iteration 
    for (let i = str.length - 1; i >= 0; i--)
    {
        reversedString += str[i];
    }
    return reversedString;
}
let string = prompt("Enter a string.");
document.getElementById("string").innerHTML += string;
document.getElementById("reversedString").innerHTML += reverseString(string);




