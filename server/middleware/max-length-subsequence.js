/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (!nums.length) return 0;

  // dynamic length because JavaScript is awesome like that :)
  // hence we don't need to track of the current running length of tails
  const tails = [];

  tails[0] = nums[0];
  // console.log(tails[0], nums[0]);

  for (let i = 1; i < nums.length; i++) {

    // replace current nums[i] with head if it's smaller
    if (nums[i] < tails[0]) {
      tails[0] = nums[i];
      // console.log(tails[0], nums[i]);
      // if current nums[i] is bigger than the largest value we've recorded
      // we can extend our tails by current nums[i]
    } else if (nums[i] > tails[tails.length - 1]) {
      console.log(tails[tails.length - 1], nums[i]);
      tails.push(nums[i]);
    } else {
      // using binary search to find the insertion point of current nums[i]
      // return r because we're looking to replace index of tail that's greater than nums[i]
      let l = 0;
      let r = tails.length - 1;
      while (l < r) {
        if (tails[mid] >= nums[i]) {
          r = mid
        } else {
          l = mid + 1;
        }
      }
      tails[r] = nums[i];
      // console.log(tails, nums[i]);
    }

  }

  return tails.length;
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]));

console.log(lengthOfLIS([0, 1, 0, 3, 2, 3]));
