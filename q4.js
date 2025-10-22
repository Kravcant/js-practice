/* 4. Write a program that checks if a given string is a palindrome (using a loop).
A palindrome is a word, number, or other sequence of characters that reads the same forward and backward (assume there will be no spaces, tabs or punctuation).
*/

function checkPalindrome(textInput) {
    let str = "";
    for (let i = textInput.length - 1; i >= 0; i--) {
        str += textInput.charAt(i);
    }
    if (str === textInput) {
        return true;
    } else {
        return false;
    }
}

// Test for palindrome

let testString = "racecar"; // true
let testString2 = "hello"; // false

// TODO: display the result of the test strings in the console
console.log(checkPalindrome(testString));
console.log(checkPalindrome(testString2));