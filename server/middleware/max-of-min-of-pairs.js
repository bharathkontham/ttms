function maxSum(a, n) {
  // Sort the array
  a.sort((c, b) => c - b);
  console.log(a);
  // To store the sum
  let sum = 0;

  // Start making pairs of every two
  // consecutive elements as n is even
  for (let i = 0; i < n - 1; i += 2) {
    console.log('i', i, 'a[i]', a[i], sum);
    // Minimum element of the current pair
    sum += a[i];
    console.log('i', i, 'a[i]', a[i], sum, 'f');
  }

  // Return the maximum possible sum
  return sum;
}

// Driver code
const arr = [1, 3, 2, 1, 4, 5];
const n = arr.length;
console.log(arr);
console.log(maxSum(arr, n));
