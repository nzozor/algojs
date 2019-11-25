// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    return str.split(' ').map((word) => { 
        return word.split('').map((letter, idx) => {
            return idx === 0 ? letter.toUpperCase() : letter;
        }).join('');
     }).join(' ');
}


function capitalise2(str) {
    capStr = str[0].toUpperCase();
    str = str.slice(1).split('');
    for(const [index, char] of str.entries()) {
        if (str[index - 1] === ' ') {
            capStr += char.toUpperCase();
        } else {
            capStr += char;
        }
    }
    return capStr;
}


module.exports = capitalize;
