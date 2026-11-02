## Two Sum

https://leetcode.com/problems/two-sum/

```
var twoSum = function(nums, target) {
    const numMap = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (numMap.has(complement)) {
            return [numMap.get(complement), i];
        }
        numMap.set(nums[i], i);
    }
};
```

## 2 Number Palindrom
https://leetcode.com/problems/palindrome-number/
var isPalindrome = function(x) {

    if( x < 0 ) return false;

    let original = x;
    let reversed = 0;

    while( x > 0) {
        let LastDigit = x % 10;
        reversed = ( reversed * 10 ) + LastDigit;
        x = Math.floor( x / 10 );
    }

   return original === reversed;


## 3 Remove Element
https://leetcode.com/problems/remove-element/description/

   var removeElement = function(nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j];
            i++;
        }
    }
    return i;
};

## 4 Remove Duplicates
https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/


var removeDuplicates = function(nums) {
    let index = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            nums[index] = nums[i];
            index++;
        }
    }
    return index;
};

## 5 Remove Element
https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {

    let k = 0;

    for(let i = 0; i < nums.length; i++){

        if(nums[i] !== val){
            nums[k] = nums[i];
            k++;
        }
    }

    return k;
};