// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### ' 
//       '#######'

function pyramid(n, row = 0, sequence = '') {
    if (row >= n) {
        return;
    }
    const maxLengthLine = n * 2 - 1;
    const midPoint = Math.floor(maxLengthLine / 2);

    if (sequence.length < maxLengthLine) {
        if (sequence.length < midPoint - row || sequence.length > midPoint + row) {
            sequence += ' ';
        } else {
            sequence += '#';
        }
        return pyramid(n, row, sequence);
    } else {
        console.log(sequence);
        return pyramid(n, row + 1, sequence = '');
    }
}
pyramid(4);
module.exports = pyramid;
