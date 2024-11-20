let arr = [30, 12, 40, 17, 11, 50, 3, 23, 27];
console.log('array before insertion sort : ' + arr);

for (let i=1; i <arr.length; i++){
    let current = arr[i];
    let j = i-1;
    
    while (j>=0 && arr[j] > current){
        arr[j+1] = arr[j];
        j--;
    }
    arr[j+1] = current;
}


console.log('array after insertion sort : '+ arr);
