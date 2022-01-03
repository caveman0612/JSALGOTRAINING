/**
//  * @param {number[]} nums
//  * @return {number[]}
 */
// var sortedSquares = function (nums) {
//   const squared = nums.map((num) => num ** 2);
//   return squared.sort((a, b) => a - b);
// };

// try to do it in O(n)

function countingSort(array) {
 return array
}

function radixSort(array, mostDigits) => {
    String(value).length 
    return array
}

var sortedSquares = function (nums) {
  let mostDigits = 0;
  const squared = nums.map((num) => {
    const value = num ** 2;
    if (String(value).length > mostDigits) mostDigits = String(value).length;
    return String(value);
  });
  const newArray = Array(nums.length);

  for (let i = mostDigits - 1; i >= 0; i--) {}

  return [squared, mostDigits];
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

// [0,1,9,16,100]
