const arr = [100, 20, 35, 1, 9, 60, 40, 64, 27];

console.log('heap sort array :', heapSort(arr))

function heapSort(arr){
    let n = arr.length;
    const pivot = Math.floor(n/2) - 1;

    // Step 1: Build Max Heap
    for (let i= pivot; i>=0; i--){
        heapify(arr, n, i);
    }

    // Step 2 - Sorting: Extract elements one by one from the heap
    for (let i= n-1; i>0; i--){
        [arr[0], arr[i]] = [arr[i], arr[0]];  // Move largest element to the end
        heapify(arr, i, 0);                   // Re-heapify remaining elements
    }

    // Step 3: Return the sorted array
    return arr;
}

function heapify(arr, n, i){
    let largest = i;      // Initialize largest as root
    let left = 2*i + 1    // Left child index
    let right = 2*i + 2   // Right child index

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]){  // arr[left] < arr[largest] FOR MIN HEAP
        largest = left
    }

    // If right child is larger than the largest so far
    if (right < n && arr[right] > arr[largest]){  // arr[right] < arr[largest] FOR MIN HEAP
        largest = right
    }

    // If largest is not root, swap and recursively heapify the affected subtree
    if (largest != i){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr, n, largest);
    }
}