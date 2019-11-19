// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // use of every is not optimal here because we are doing some unecessary checking
    // when we arrive to the middle of the array we already can know if str is a palindrome
    return str.split('').every((char,index) =>  char === str[str.length - 1 - index]);
}

// function palindromeMe(str) {
//     return str === reverseStr(str);
// }

// function reverseStr(str) {
//     return str.split('').reduce((result, item) => item + result, '');
// }

// console.log(reverseStr('abcd'));
module.exports = palindrome;
