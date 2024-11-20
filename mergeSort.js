const array = [38, 27, 43, 3, 9, 82, 10];

function mergeSort(arr) {
    // Base case: if the array has one or no elements, it's already sorted
    if (arr.length <= 1) return arr;

    // Step 1: Divide the array into two halves
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);
    // console.log('left array : ' + left);
    
    
    // Step 2: Recursively sort the left and right halves
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    // console.log('sortedLeft : ' + sortedLeft);
    // console.log('sortedRight : ' + sortedRight);
    

    // Step 3: Merge the sorted halves
    return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
    console.log('left : ', left, '_______ right : ', right);

    let i = 0;
    let j = 0;
    let sortedArray = [];

    // Compare elements from both arrays and merge them in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArray.push(left[i]);
            i++;
        } else {
            sortedArray.push(right[j]);
            j++;
        }
    }

    // Concatenate the remaining elements (if any)
    return sortedArray.concat(left.slice(i)).concat(right.slice(j));
}



console.log('ARRAY : ' + array);
const sortedArray = mergeSort(array);
console.log('SORTED ARRAY : ' + sortedArray);
