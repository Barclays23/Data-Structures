class Heap {
    constructor() {
        this.array = [];
    }

    
    insert(value) {
        this.array.push(value); // Add the value at the end
        
        const index = this.array.length - 1;
        this.heapifyUp(index); // Fix the heap property
    }

    heapifyUp(index) {
        let parentIndex = Math.floor((index - 1) / 2);

        if (index > 0 && this.array[index] > this.array[parentIndex]) {  // Checking if the inserted element is greater than its parent
            this.swap(index, parentIndex); // Swap with parent
            this.heapifyUp(parentIndex);   // Recursively heapifyUp on the parent (checking parent with its parent)
        }
    }
    
    print(){
        console.log('heap :', this.array);
    }

    swap(index1, index2) {
        [this.array[index1], this.array[index2]] = [this.array[index2], this.array[index1]];
    }

    heapSort() {
        let size = this.array.length;

        // Step 1: Build the heap
        this.buildHeap(size);

        // Step 2: Extract the largest values one by one
        for (let i = size-1; i > 0; i--) {
            this.swap(i, 0); // Move the largest value to the end
            this.heapifyDown(i, 0); // Fix the heap property for the remaining elements
        }

        // Step 3: Return sorted array
        return this.array;
    }

    buildHeap(size) {
        let startIndex = Math.floor(size / 2) - 1; // Last non-leaf node

        // Heapify each non-leaf node from bottom to top
        for (let i = startIndex; i >= 0; i--) {
            this.heapifyDown(size, i);
        }
    }

    heapifyDown(size, index) {
        let largest = index;
        let left = 2 * index + 1;
        let right = 2 * index + 2;

        // Check if left child is larger than the current largest
        if (left < size && this.array[left] > this.array[largest]) {
            largest = left;
        }

        // Check if right child is larger than the current largest
        if (right < size && this.array[right] > this.array[largest]) {
            largest = right;
        }

        // If the largest value is not at the current index, swap and continue
        if (index != largest) {
            this.swap(index, largest);
            this.heapifyDown(size, largest);
        }
    }
}

const heap = new Heap();

const nums = [20, 100, 35, 1, 9, 60, 40, 64, 27];

console.log('nums array :', nums);


for (let i=0; i<nums.length; i++){
    heap.insert(nums[i])
}

heap.print()

console.log('heap sort:', heap.heapSort());

