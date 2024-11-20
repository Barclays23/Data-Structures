
let arr = [3, 6, 9, 15, 18, 21, 24, 30, 35, 40, 45];


// =============== FIND INDEX OF AN ELEMENT WITH BINARY SEARCH ================
function binarySearch(arr, target) {
    let low = 0;
    let high = arr.length-1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);        
        
        if (target === arr[mid]) {
            return mid;
        } else if (target < arr[mid]) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return -1;
}

console.log('The element 40 is at index :' + binarySearch(arr, 40));




// ==================== BINARY SEARCH USING RECURSION ===========================
function recursiveBinarySearch(arr, target, left, right){
    if (left > right){
        console.log('element not found.');
        return -1;
    }

    let mid = Math.floor((left + right) / 2);

    if (target === arr[mid]) {
        console.log('element is at : ', mid);
        return mid;

    } else if (target < arr[mid]){
        return recursiveBinarySearch(arr, target, left, mid-1);
        
    } else {
        return recursiveBinarySearch(arr, target, mid+1, right);
    }
}

recursiveBinarySearch(arr, 30, 0, arr.length-1);