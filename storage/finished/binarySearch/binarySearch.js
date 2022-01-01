var search = function (nums, target) {
  debugger;
  let end = nums.length - 1;
  let start = 0;

  while (start <= end) {
    let half = Math.floor((end + start) / 2);
    let value = nums[half];
    if (value > target) {
      end = half - 1;
    } else if (value < target) {
      start = half + 1;
    } else if (value == target) {
      return half;
    }
  }
  return -1;
};

search([-1, 0, 3, 5, 9, 12], 13);
