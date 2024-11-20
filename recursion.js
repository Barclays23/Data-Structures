// FIND SUM USING RECURSION ----------------------------------------------------------
let sum = 0;

function sumRecursion(num) {
	if (num === 0) {
		return sum;
	} else {
		sum += num;
		return sumRecursion(num - 1);
	}
}

console.log(sumRecursion(5));




// FIND SUM OF ARRAY ELEMENTS --------------------------------------------------------
function arraySum(arr) {
	if (arr.length === 0) {
		return 0;
	} else {
		console.log("fist element :", arr[0]);
		return arr[0] + arraySum(arr.slice(1));
	}
}

let arr = [5, 4, 7, 9, 2, 8];
console.log(arraySum(arr));





// REVERSE STRING -------------------------------------------------------------
function stringReverse(str) {
	if (str.length <= 1) {
		return str;
	} else {
		console.log("str[0] : ", str[0]);
		console.log("str[0] : ", str.slice(1) + str[0]);
		return stringReverse(str.slice(1)) + str[0];
	}
}

let name = "brototype";
console.log(stringReverse(name));





// CHECKING STRING IS A PALINDROME OR NOT --------------------------------------
function isPalindrome(str) {
	if (str.length === 1) {
		return true;
	}

	if (str[0] != str[str.length - 1]) {
		return false;
	}

	return isPalindrome(str.substring(1, str.length - 1));
}

let word = "malayalam";
console.log(isPalindrome(word));
console.log(
isPalindrome(word) === true ? "it is a palindrome" : "it is NOT a palindrome"
);





// ==================== BINARY SEARCH USING RECURSION ===========================

function recursiveBinarySearch(arr, target, left, right) {
	if (left > right) {
		console.log('Binary Search with Recursion : "element not found" ');
		return;
	}

	let mid = Math.floor((left + right) / 2);

	if (target === arr[mid]) {
		console.log("Binary Search with Recursion : ", mid);
		return mid;
	} else if (target < arr[mid]) {
		return recursiveBinarySearch(arr, target, left, mid - 1);
	} else {
		return recursiveBinarySearch(arr, target, mid + 1, right);
	}
}

let sortedArray = [3, 5, 6, 7, 8, 11, 15, 26, 46, 50, 60];
recursiveBinarySearch(sortedArray, 60, 0, sortedArray.length - 1);





// =============== REMOVE DUPLICATES FROM ARRAY USING RECURSION ===================
let duplicates = [12, 13, 15, 16, 13];
let unique = [];

function removeDuplicates(duplicates, unique, index = 0) {
	if (duplicates.length === index) {
		console.log("Removed Duplicates with recursion :", unique);
		return unique;
	}

	if (!unique.includes(duplicates[index])) {
		unique.push(duplicates[index]);
	}

	index++;
	return removeDuplicates(duplicates, unique, index);
}

removeDuplicates(duplicates, unique);






// =============== CONVERTING JAGGED ARRAY TO FLAT/NORMAL ARRAY ===================
let jaggedArray = [1, 2, 4, [2, 5], 8, [12, 1, [5, 9, 4, [33, 22]]], [55, 73]];


function convertJagged(arr) {
	let flatArray = [];
	arr.forEach((element) => {
		if (Array.isArray(element)) {
			flatArray = flatArray.concat(convertJagged(element));
		} else {
			flatArray.push(element);
		}
	});
	
	return flatArray;
	
}

console.log('Converted Jagged Array to Flat Array :', convertJagged(jaggedArray));



