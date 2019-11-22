// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    let sign = Math.sign(n);
    return parseInt(Math.abs(n).toString(10).split('').reduce( (result, item) => item + result , ''), 10) * sign;   
}

function reverseInt2(n) {
    let sign;
    if(n !== 0) {
        sign = Math.sign(n) == 1 ? '+' : '-' ;
    } else {
        sign = '';
    }

    return parseInt(sign + Math.abs(n).toString(10).split('').reduce( (result, item) => item + result , ''), 10);   
}

console.log(reverseInt(-981)); 
module.exports = reverseInt;
