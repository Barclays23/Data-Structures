let arr = [30, 12, 40, 17, 11, 50, 3, 23, 27];
console.log('array before selection sort : ' + arr);


for (let i=0; i<arr.length-1; i++){
    let smallestIndex = i;

    for (let j=i+1; j<arr.length; j++){
        if (arr[smallestIndex] > arr[j]){
            smallestIndex = j;
        }
    }
    console.log(`${i} : ${smallestIndex}`);
    let temp = arr[smallestIndex];
    arr[smallestIndex] = arr[i];
    arr[i] = temp;
}








console.log('array after selection sort : ' + arr);