/** Answer to second question */
function sortedFrequency(arr, num) {
    function findFirstOccurrence(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                high = mid - 1;
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    function findLastOccurrence(arr, num) {
        let low = 0;
        let high = arr.length - 1;
        let result = -1;

        while (low <= high) {
            let mid = Math.floor((low + high) / 2);

            if (arr[mid] === num) {
                result = mid;
                low = mid + 1;
            } else if (arr[mid] < num) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return result;
    }

    const firstOccurrence = findFirstOccurrence(arr, num);
    const lastOccurrence = findLastOccurrence(arr, num);

    if (firstOccurrence !== -1 && lastOccurrence !== -1) {
        return lastOccurrence - firstOccurrence + 1;
    } else {
        return 0;
    }
}
/** Answer to third question */
