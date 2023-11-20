/** Answer to first question */
function countZeroes(arr) {
    let count = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === 0) {
            count++
        }
    }
    return count;
}
