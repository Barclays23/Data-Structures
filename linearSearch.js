let arr1 = [10, 20, 30, 40, 50];

function linearSearch (arr, target){
    for (i=0; i<arr.length; i++){
        if (arr[i] === target){
            return i;
        }
    }
    return `${target} not found`;
    // return -1;
}

console.log('linearSearch for 30 :', linearSearch(arr1, 30));
console.log('linearSearch for 90 :', linearSearch(arr1, 90));


