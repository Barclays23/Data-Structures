let word1 = 'malayalam';
let word2 = 'brototype';

// USING RECURSION 1 --------------------------------------------------------------------------------
function isPalindromeRecursion1(str, left = 0, right = str.length-1){
    if (left >= right){
        return true;
    }
    
    if (str[left] != str[right]){
        return false;
    }

    left ++;
    right --;

    return isPalindromeRecursion1(str, left, right);
    
}

console.log('USING RECURSION 1 :', isPalindromeRecursion1(word1));




// USING RECURSION 2 -------------------------------------------------------------------------------
function isPalindromeRecursion2 (str){
    if (str.length === 1){
        return true;
    }

    if (str[0] !== str[str.length-1]){
        return false;
    }

    return isPalindromeRecursion2(str.substring(1, str.length-1));
}

console.log('USING RECURSION 2 :', isPalindromeRecursion2(word1));