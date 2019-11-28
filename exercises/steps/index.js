// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0) {
    if (n === row ) {
        return;
    }

    let step = '';
    for(let i = 0; i < n; i++) {
        if (i <= row) {
            step += '#';
        } else {
            step += ' ';
        }
    }
    console.log(step);
    steps(n, row + 1);

}
function steps2(n) {
    for(let i = 0; i < n; i++) {
        let step = '';
        for(let j = 0; j < n; j++) {
            if(j <= i) {
                step += '#'; 
            } else {
                step +=' ';
            }
        }
        console.log(step);
    }
}

steps(4);
module.exports = steps;
