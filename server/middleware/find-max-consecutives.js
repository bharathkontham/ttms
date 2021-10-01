var findMaxConsecutiveOnes = function(nums) {
  if (nums.length === 0) return 0;
  if (nums.length === 1) return 1;
  let maxcaonsectivecounts = [];
  let count = 0;
  nums.reduce((a, c, index) => {
      if (a == -1) {
          count++;
          return c;
      }
      
      if (c === a) {
          count++;
          if (index === nums.length - 1) {
            maxcaonsectivecounts.push(count);
          }
          return c;
      }
      
      if (c !== a) {
          maxcaonsectivecounts.push(count);
          count = 1;
      }
      return c;
  }, -1);
  maxcaonsectivecounts.sort((a, b) => b-a);
  return maxcaonsectivecounts[0];
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes2 = function(nums) {
  if (nums.length === 0) return 0;
  let counter = 0;
    let maxCount = 0;
  nums.reduce((a, c, index) => {
      if (c === 1) {
          counter++;
          if (index === nums.length - 1 && counter > maxCount) {
            maxCount = counter;
          }
      } else if (c === 0) {
          if (counter > maxCount) {
            maxCount = counter;
          }
          counter = 0;
      }
      return c;
  }, 0);
  return maxCount;
};