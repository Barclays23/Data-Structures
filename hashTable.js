class HashTable{
    constructor(){
        this.table = {};
    }

    hash(key){
        // console.log(key);
        const string = key.toString();
        let hashValue = 0;

        for (let char of string){            
            hashValue += char.charCodeAt(0);
            // console.log(char + ' - ' + char.charCodeAt(0));
        }
        return hashValue;
    }

    set(key, value){
        const index = this.hash(key);

        if (!this.table[index]){
            this.table[index] = [];
        }
        // console.log(key + ' - ' + index);
        
        this.table[index].push({key, value})
    }

    get(key){
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket){
            for (let item of bucket){
                if (item.key === key){
                    // console.log(`value of ${item.key} - ${item.value}`);
                    return item.value;
                }
            }
        }
        // console.log('not found');
        return undefined;
    }

    remove(key){
        const index = this.hash(key);
        const bucket = this.table[index];

        if (bucket){
            // console.log('bucket ', bucket);

            for (let i=0; i<bucket.length; i++){
                if (bucket[i].key === key){
                    const removed = bucket.splice(i, 1);
                    console.log('removed ', removed[0]);
                    return removed[0];
                }
            }
        } else {
            console.log('key not found for removing');
            return undefined;
        }
    }

    print(){
        for (let i=0; i<this.table.length; i++){
            if (this.table[i]){

                console.log(`${i} : ${this.table[i]}`);
            }
        }
        // console.log('table : ', this.table);
    }
}

const hashTable = new HashTable();

hashTable.get('name');
hashTable.set('name', 'zayed');
hashTable.set('mane', 'ali');

hashTable.get('name');
hashTable.get('mane');
hashTable.print();

hashTable.remove('mane');
hashTable.print();



// -------------- REMOVE DUPLICATE ELEMENTS FROM ARRAY with HASHTABLE (NO ADDITIONAL ARRAY);
console.log(`
------------------------------------------ REMOVE DUPLICATE ELEMENTS FROM ARRAY with HASHTABLE (NO ADDITIONAL ARRAY)`);

function removeDuplicates(arr){
    let uniqueSize = 0;

    for (let i=0; i< arr.length; i++) {
        if (!hashTable.get(arr[i])) {
            hashTable.set(arr[i], true);
            arr[uniqueSize] = arr[i];
            uniqueSize ++;
        }
    }
    
    arr.length = uniqueSize;

    return arr;

}

let arr = [1, 3, 4, 4, 4, 5, 12, 12, 4, 3, 1, 6, 7];

console.log('arr : ', arr);

console.log('removed duplicates : ', removeDuplicates(arr));


hashTable.print();




// ------------------------------------------ FIND FREQUENCY OF ARRAY ELEMENTS;
console.log(`
------------------------------------------ FIND FREQUENCY OF ARRAY ELEMENTS)`);

function findFrequency(arr){
    const map = new Map();

    for (let i=0; i<arr.length; i++){
        if (!map.get(arr[i])){
            map.set(arr[i], 1)
        } else {
            map.set(arr[i], map.get(arr[i]) +1)
        }
    }

    return map;
}

const nums = [3, 1, 2, 3, 4, 2, 1, 5, 3, 4, 5, 5, 5];
console.log('nums array :', nums);

console.log('frequency : ', findFrequency(nums));





// ------------------------------------------ LEET CODE 2956 - FIND COMMON ELEMENTS BETWEEN TWO ARRAYS;
console.log(`
------------------------------------------ LEET CODE 2956 - FIND COMMON ELEMENTS BETWEEN TWO ARRAYS)`);


var findIntersectionValues = function(nums1, nums2) {
    const size = nums1.length > nums2.length ? nums1.length : nums2.length;

    const map1 = new Map()
    const map2 = new Map()
    let answer1 = 0
    let answer2 = 0

    for (let i=0; i<size; i++){
        map1.set(nums1[i], true)
        map2.set(nums2[i], true)
    }

    for (let i=0; i<size; i++){
        if (map2.has(nums1[i])) answer1 ++
        if (map1.has(nums2[i])) answer2 ++
    }

    return [answer1, answer2]
};

const nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
console.log('nums1 :', nums1);
console.log('nums2 :', nums2);

console.log('number of common elements :', findIntersectionValues(nums1, nums2));





// ------------------------------------------ LEET CODE 2965 - FIND REPEATED AND MISSING VALUES;
console.log(`
------------------------------------------ LEET CODE 2965 - FIND REPEATED AND MISSING VALUES)`);
var findMissingAndRepeatedValues = function(grid) {
    const map = new Map();
    let answer = []

    for (let i=0; i<grid.length; i++){
        for (let j=0; j<grid.length; j++){

            if (map.has(grid[i][j])){
                answer.push(grid[i][j]);  // repeated element
            }

            map.set(grid[i][j], true);
        }
    }

    const size = grid.length * grid.length;

    for (let i=1; i<= size; i++){
        if (!map.has(i)){
            answer.push(i);  // missing element
        }
    }

    return answer;
};

const grid = [[9,1,7],[8,9,2],[3,4,6]]
console.log('grid : ', grid);

console.log('repeated and missing numbers :', findMissingAndRepeatedValues(grid));





////////////////////////////1941. Check if All Characters Have Equal Number of Occurrences/////////////////

/////////////////////////////////LEET CODE:961. N-Repeated Element in Size 2N Array////////////////////////////

/////////////////////////////////////LEET CODE:2215. Find the Difference of Two Arrays/////////////////////////

///////////////////////////////////////LEET CODE : 137. Single Number II///////////////////////////////////////

/////////////////////////////////////////////LEET CODE :3146. Permutation Difference between Two Strings/////////////////////


