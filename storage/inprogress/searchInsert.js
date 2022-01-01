var searchInsert = function (nums, target) {
  debugger;
  let left = 0;
  let right = nums.length - 1;
  let closestValue = Infinity;
  let closestIdx;
  while (left <= right) {
    let half = Math.floor(left + (right - left) / 2);
    let currentValue = nums[half];
    if (left == right) {
      if (nums[half] < target) return nums.length;
      else return 0;
    }
    if (target > currentValue && target - currentValue < closestValue) {
      closestValue = currentValue;
      closestIdx = half;
    }
    if (currentValue < target) {
      left = half + 1;
    } else if (currentValue > target) {
      right = half - 1;
    } else return half;
  }
  return half;
};

console.log(searchInsert([1, 3, 5, 6], 2));
