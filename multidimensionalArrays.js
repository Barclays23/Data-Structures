// --------------------- NESTED ARRAY ---------------------------------
let nestedArray = [
    [1, 2, 3],
    [7, 8, 9],
    [4, 5, 6],
];

console.log('nestedArray : ', nestedArray);


// --------------------- JAGGED ARRAY 1 ---------------------------------
let jaggedArray1 = [
    [1, 2, 3],
    [6, 7, 8, 9],
    [4, 5],
];

console.log('jaggedArray1 : ', jaggedArray1);


// --------------------- JAGGED ARRAY 2 ---------------------------------
const jaggedArray2 = [
    [1, 2, 3],
    [8, [9, [10, 11]], 12],
    [4, [5, 6], 7]
];






// --------------------- CONVERT TO NORMAL ARRAY (using forEach) ---------------------------------
let normalArray = [];

jaggedArray1.forEach(row=>{
    row.forEach(val=>{
        normalArray.push(val);
    })
});

console.log('normalArray : ', normalArray);


// ---------------------- CONVERT TO NORMAL ARRAY (using flat() method) ----------------------------
let flattenedArray = jaggedArray1.flat();
console.log('Flattened Array:', flattenedArray);



// --------------------- CONVERT TO NORMAL ARRAY (using recursion) ---------------------------------
function jaggedArrayFlat(arr){
    let = normalArray = [];

    arr.forEach(element=>{
        if (Array.isArray(element)){
            normalArray = normalArray.concat(jaggedArrayFlat(element));
            // console.log('concat :', normalArray);

        } else {
            normalArray.push(element);
        }
    })

    // console.log('result array :', normalArray);
    
    return normalArray;
}

jaggedArrayFlat(jaggedArray2);