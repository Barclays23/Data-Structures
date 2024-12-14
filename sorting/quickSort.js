let array = [32, 41, 10, 2, 5, 3, 64, 22, 10];
console.log('array before quick sort :', array);

// ------------------------------------------- METHOD 1
function quickSort1(arr, start, end){
    if (start >= end){
        return;
    }

    let pivot = start;
    let left = start +1;
    let right = end;

    while (left <= right){
        if (arr[left] > arr[pivot] && arr[right] < arr[pivot])  swap(arr, left, right);        
        if (arr[left] < arr[pivot])   left ++;
        if (arr[right] > arr[pivot])   right --;
    }

    swap(arr, pivot, right);
    quickSort1(arr, start, right-1);
    quickSort1(arr, right+1, end);
    return arr;
}

function swap(arr, i, j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


// console.log('sorted with method1 : ' + quickSort1(array, 0, array.length-1));



// ------------------------------------------- METHOD 2
function quickSort2(arr){
    if (arr.length <= 1) return arr;

    let pivot = arr[arr.length-1];
    let left = [];
    let right = [];

    for (let i=0; i<arr.length-1; i++){

        if (arr[i] <= pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    console.log('left : ', left, '_____ pivot : ', pivot, '_____ right : ', right);

    return [...quickSort2(left), pivot, ...quickSort2(right)];
}

console.log('sorted with method2 : ' + quickSort2(array));
