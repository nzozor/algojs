// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// function anagrams(stringA, stringB) {
//     let cleanStringA = cleanString(stringA);
//     let cleanStringB = cleanString(stringB);
//     return cleanStringA.split('').sort().join('') === cleanStringB.split('').sort().join('');
// }

function anagrams(stringA, stringB) {
    let cleanStringA = cleanString(stringA);
    let cleanStringB = cleanString(stringB);

    stringAhash = getStringHash(cleanStringA);
    stringBhash = getStringHash(cleanStringB);


    if (Object.keys(stringAhash).length !== Object.keys(stringBhash).length) {
        return false;
    }
    for (const[k, v] of Object.entries(stringAhash)) {
        if (v !== stringBhash[k]) {
            return false;
        }
    }
    return true;
}

function getStringHash(string) {
    const hash = {};
    for (const el of string) {
        if (hash[el]) {
            hash[el]++;
        } else {
            hash[el] = 1;
        }
    }
    return hash;
}

function cleanString(string) {
    return string.replace(/[\W]/g, '').toLowerCase();
}

console.log(cleanString('One one'));
console.log(cleanString('One one c'));

console.log(anagrams('rail safety dodo', 'dfairy odotales'));
console.log(anagrams('One one', 'One one c'));
module.exports = anagrams;
