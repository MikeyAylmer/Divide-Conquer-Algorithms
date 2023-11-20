/** Answer to forth question */
function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        // If the array is already sorted, the rotation count is 0
        if (arr[left] <= arr[right]) {
            return left;
        }

        let mid = Math.floor((left + right) / 2);
        let next = (mid + 1) % arr.length; // Calculate the index of the next element

        // Check if the next element is smaller than the current element
        if (arr[mid] > arr[next]) {
            return next;
        }

        // Determine which half to search
        if (arr[left] <= arr[mid]) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    return 0; // If the array is not rotated
}
