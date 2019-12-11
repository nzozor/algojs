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

function pyramid4(n, row=0, sequence = '') {

}
function pyramid3(n, row = 0) {
    if(row === n) {
        return;
    }
    const middleIndex = Math.floor((n * 2 -1) / 2);
    let rowlog = '';
    for (let i = 0; i < n * 2 -1; i++) {
        if (i >= middleIndex - row && i <= middleIndex + row) {
            rowlog += '#';
        } else {
            rowlog += ' ';
        }
    }
    console.log(rowlog);
    pyramid(n, row + 1);
}

function pyramid2(n) {
    let colNumber = 1;
    for (let i = 1; i < n; i++) {
        colNumber +=2;
    }

    const middleIndex = Math.floor(colNumber / 2);


    for (let i = 0; i < n; i++) {
        let row = '';
        
        for (let j = 0; j < colNumber; j++) {
            if (j >= middleIndex - i && j <= middleIndex + i) {
                row += '#';
            } else {
                row += ' ';
            }
        }
        console.log(row);
    }
}
pyramid(4);
module.exports = pyramid;
