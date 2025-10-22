// 3. Remove duplicates from an array (using a loop). FYI: array.includes(element) checks if an element is in an array
function removeDuplicates(array) {
    let singular = [];
    for (let i = 0; i < array.length; i++) {
        if (!singular.includes(array[i])) {
            singular.push(array[i]);
        }
    }
    return singular;
}

// Test for remove duplicates

let testArray1 = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5]; // [1, 2, 3, 4, 5]
let testArray2 = [9, 9, 9, 9, 9, 19, 9]; // [9, 19]

// TODO: display the array with duplicates removed in the console
console.log(removeDuplicates(testArray1));
console.log(removeDuplicates(testArray2));