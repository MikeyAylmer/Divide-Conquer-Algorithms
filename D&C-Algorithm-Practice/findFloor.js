/** Answer Fifth question */
function findFloor(arr, x) {
    let left = 0;
    let right = arr.length - 1;
    let floor = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === x) {
            return arr[mid];
        } else if (arr[mid] < x) {
            floor = arr[mid]; // Update the floor and search in the right half
            left = mid + 1;
        } else {
            // Search in the left half
            right = mid - 1;
        }
    }

    return floor;
}