var lengthOfLIS = function (nums) {
  if (nums.length == 1) return 1;
  let dp = Array.from({
    length: nums.length
  }, () => 1)
  for (let i = 1; i < nums.length; i++) {
    let j = 0;
    while (j < i) {
      if (nums[i] > nums[j]) {
        // console.log(`i, j, dp[i], dp[j], Math.max(dp[i], dp[j] + 1), ${i}, ${j}, ${dp[i]}, ${dp[j]}, ${Math.max(dp[i], dp[j] + 1)}`);
        dp[i] = Math.max(dp[i], dp[j] + 1);
        // console.log(dp);
      }
      j++;
    }
    // console.log(dp);
  }
  return Math.max(...dp);
};

console.log(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18]))
console.log(lengthOfLIS([0,1,0,3,2,3]));
console.log(lengthOfLIS([3,5,6,2,5,4,19,5,6,7,12]));
