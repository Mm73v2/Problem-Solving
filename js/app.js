// First Problem
// Returning the sum of an array values.

// First approach using reduce
const sumOfArray = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0); // using the high order array method "reduce" which accepts a callback function and an initial value
};

// Second approach using for loop
const sumOfArrayV2 = (arr) => {
  // initializing a variable to hold the sum of the array.
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i]; // adding each element value to the result variable
  }
  return result;
};

console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumOfArrayV2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log("--------------------------------------");

// ================================================================

// Second Problem
// Find the max value

// First approach
// Using Math.max
const maxValue = (arr) => {
  return Math.max(...arr); // Math.max return the biggest value in a given numbers, here used the spread operator to put the number to function.
};

// Second approach
// using for loop and comparing the max variable to the current array element and if it's greater than max we assign the max to that element value till we reach the end of the array.
const maxValueV2 = (arr) => {
  let max = 0; // initializing a variable to hold the max value.
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i]) {
      // checking if the current element value is greater than the max variable.
      max = arr[i];
    }
  }
  return max;
};

console.log(maxValue([1, 2, 3, 4, 5, 51, 6, 7, 8, 9, 10]));
console.log(maxValueV2([1, 2, 3, 4, 5, 51, 6, 7, 8, 9, 10]));
console.log("--------------------------------------");

// ================================================================

// Third Problem
// Reversing a string

// First approach
// Using the reverse function

const reverseString = (str) => {
  // first we turn the string into an array and then we use the reverse the method the flips the array.
  // and then we join that array back to a string but now reversed.
  return str.split("").reverse().join("");
};

// Second approach
// Using for loop and adding each character of the string to a new one but in reverse
const reverseStringV2 = (str) => {
  let result = ""; // initializing a variable to hold the reversed string.

  // setting the loop counter to the length of the string but -1
  // then the condition is as long as i is greater than or equal to 0 it will keep iterating.
  // the counter is decreasing because we are starting from the end to the start.
  for (let i = str.length - 1; i >= 0; i--) {
    result += str[i]; // adding the chars to the result.
  }
  return result;
};

console.log(reverseString("this is test"));
console.log(reverseStringV2("this is test"));
console.log("--------------------------------------");
// ================================================================

// Fourth Problem
// Remove duplicated numbers

// First approach
// Using the set data sturcture which only accepts unique values.

const removeDuplicatedNumbers = (arr) => {
  // convert the array to a Set, which automatically removes duplicates.
  // spread the Set back into an array.
  return [...new Set(arr)];
};

// Second approach
// Using loop and creating a new result array to hold the unique values.
// we check if the value is there or not by using the includes method if it returns false then we should add it.
const removeDuplicatedNumbersV2 = (arr) => {
  // initialize an empty array to store unique values
  const result = [];

  // loop through each element in the input array
  for (let i = 0; i < arr.length; i++) {
    // check if the element is not already in the result array
    if (!result.includes(arr[i])) {
      // if the element is not in the result array we add it.
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(removeDuplicatedNumbers([1, 1, 1, 2, 6, 4, 4, 5, 8, 7, 4, 6, 2]));
console.log(removeDuplicatedNumbersV2([1, 1, 1, 2, 6, 4, 4, 5, 8, 7, 4, 6, 2]));
