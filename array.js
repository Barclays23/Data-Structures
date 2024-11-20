// REMOVE DUPLICATES FROM ARRAY (normal) -------------------------------------------
let arr1 = [12, 13, 15, 16, 13, 15, 11];

console.log('initial array : ' + arr1);

for (i=0; i< arr1.length; i++){
    for (j= i+1; j<arr1.length; j++){
        if (arr1[i] === arr1[j]){
            arr1.splice(j, 1);
        }
    }
}
console.log('array after delete : ' + arr1);




// REMOVE DUPLICATES FROM ARRAY ( time complexity O(n2) ) -------------------------------------------
let arr2 = [1, 2, 6, 7, 3, 2, 5, 3, 4];
let arr2Unique = [];


for (let val of arr2){
    if (!arr2Unique.includes(val)){
        arr2Unique.push(val);
    }
}

console.log('unique arr2 : ', arr2Unique);




// REMOVE DUPLICATES FROM ARRAY WITH OBJECT (time complexity O(n) ) ----------------------------------
let arr4 = [1, 2, 6, 7, 3, 2, 5, 3, 4];
function removeDuplicates4(arr){
    let unique = [];
    let obj = {};

    for (let item of arr){
        if (!obj[item]){   // if obj[item] != true
            obj[item] = true;
            unique.push(item);
        }
    }
    console.log('Removed dulicates with O(1) : ', unique);
    return unique;
}

removeDuplicates4(arr4);





// REMOVE DUPLICATES FROM ARRAY (with Recursion 2) : Time Complexity O(n) -----------------------------
let arr5 = [4, 3, 2, 5, 6, 5, 4, 2, 0, 7, 4, 2, 3, 4, 6, 3, 2];

function removeDuplicatesWithRecursion2(arr, index = 0, seen = {}, unique = []) {

    if (index >= arr.length){
        return unique;
    }

    if (!seen[arr[index]]){  // if not in seen {} (if not true)
        seen[arr[index]] = true;
        unique.push(arr[index]);
    }

    index ++;

    return removeDuplicatesWithRecursion2(arr, index, seen, unique);
    
}

let answer = removeDuplicatesWithRecursion2(arr5);
console.log('Removed duplicates from array with Recursion O(n) :', answer);
