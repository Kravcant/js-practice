// 2. Find the largest number in an array (using a loop)
function findLargest(array) {
    if (array.length < 1) {
        return null;
    }
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (i > max) {
            max = array[i];
        }
    }
    return max;
}

// Test for find largest
let testArray1 = [1, 4, 5, 4, 3]; // 5
let testArray2 = []; // null

// TODO: display the largest number in the array in the console
console.log(findLargest(testArray1));
console.log(findLargest(testArray2));