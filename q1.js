// 1. Calculate the sum of all numbers in an array (using a loop)

function sumArray(array) {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

// Test for sum array
let testArray1 = [1, 2, 3, 4, 5]; // 15
let testArray2 = [2, 9, 100]; // 111

// TODO: display the sum of the array in the console
console.log(sumArray(testArray1));
console.log(sumArray(testArray2));