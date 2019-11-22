// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const hashTable = {};
    for( char of str) {
        if (hashTable[char]) {
            ++hashTable[char];
        } else {
            hashTable[char] = 1;
        }
    }
    let maxVal = -1;
    let maxKey = -1;
    console.log(hashTable);
    for(const [key, value] of Object.entries(hashTable)) {
        if(value > maxVal) {
            maxKey = key;
            maxVal = value;
        }
    }
    return maxKey;
}

console.log(maxChar('abcdefghijklmnaaaaa'));

module.exports = maxChar;
