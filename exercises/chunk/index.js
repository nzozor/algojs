// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


function chunk(array, size) {
    const chunked = [];

    for (const el of array) {
        const last = chunked[chunked.length -1];
        /*jshint -W087 */
        debugger;
        if (!last || last.length === size ) {
            chunked.push([el]);
        } else {
            last.push(el);
        }
    }
    return chunked;
}

function chunk3(array, size) {
    let index = 0;
    const chunked = [];
    
    while(index < array.length) {
        chunked.push(array.slice(index, index + size));
        index += size;
    }
    return chunked;
}

function chunk2(array, size) {
    const arrayOfChunks = [];
    let chunk = [];
    for (const el of array) {
        if(chunk.length < size) {

            chunk.push(el);
        } else {
            arrayOfChunks.push(chunk);
            chunk = [el];
        }
    }
    if (chunk.length > 0) {
        arrayOfChunks.push(chunk);
    }
    return arrayOfChunks;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
console.log(chunk([1, 2, 3, 4, 5], 10));
console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));

module.exports = chunk;
