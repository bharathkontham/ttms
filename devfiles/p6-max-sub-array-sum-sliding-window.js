// given an array of integers and sub array length as inputs
// find out the max sum of sub array of length n

// examples
// ([1,3,4,5,6,9,2,15], 2)  17
// ([10,3,14,5,6,9,2,15], 2)  19
// ([1,3,4,5,7,6,9,2,0], 3)  22
// ([1], 2) return null if n > array.length or if array.length / n is 0

function maxSumOfSubArray(input, num) {
  // return null for invalid cases
  if (input.length < num || input.length === 0 || num === 0) return null;
  // create tempSum and maxSum variables
  let tempSum = 0;
  let maxSum = 0;
  // loop over input to get initial subarray sum and store in tempSum
  for (let i = 0; i < num; i++) {
    tempSum += input[i];
  }
  // loop over input with initial value as num
  for (let i = num; i < input.length; i++) {
    tempSum = tempSum - input[i - num] + input[i];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

console.log(maxSumOfSubArray([1,3,4,5,6,9,2,15], 2));
console.log(maxSumOfSubArray([10,3,14,5,6,9,2,15], 2));
console.log(maxSumOfSubArray([1,3,4,5,7,6,9,2,0], 3));
