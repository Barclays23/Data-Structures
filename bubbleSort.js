let arr = [30, 12, 40, 17, 11, 50, 3, 23, 27];
console.log('array before bubble sort : ' + arr);

for (let i=0; i< arr.length; i++){
    for (let j=0; j<arr.length-1-i; j++){
        
        if (arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}


console.log('array after bubble sort : ' + arr);
