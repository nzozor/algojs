// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverseBak(str) {
    const reversedStr = [];
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr.push(str[i]);
    }
    return reversedStr.join('');
}

function reverse2(str) {
    return str.split('').reverse().join('');
} 

function reverse3(str) {
    
    let reversedStr = '';
    for (const char of str) {
        reversedStr = char + reversedStr;
    }
    return reversedStr;
} 

function reverse(str) {
    return str.split('').reduce((result, char) => char + result, '');
}

console.log(reverse("abcd"));
// console.log(reverse2("abcd"));
// console.log(reverse3("abcd"));


module.exports = reverse;
