// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function memoized(fn) {
    const hash = [];
    return function(...args) {
        if(hash[args[0]])
    } 
}
function fib(n) {
    if (n < 2) {
        return 1;
    }
    return fib2(n - 1) + fib2(n - 2);
}

console.log(fib(4));

function fib2(n) {
    const fibArray = [0, 1];
    for (let i = 2; i <= n; i++) {
        fibArray.push(fibArray[i -1] + fibArray[i -2]);
    }
    return fibArray[n];
}
// console.log(fib(3));

module.exports = fib;
