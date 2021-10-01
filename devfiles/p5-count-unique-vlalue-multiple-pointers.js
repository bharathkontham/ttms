// count unique values in sorted integer array
// input array can have negative values

// examples
// [-3,-3,-2,-1,0,1,1,1,2] - result: 6
// [-3,-3,-3,-3,0,1,1,1,2] - result: 4
// [1,1,1,1,2] - result: 2
// [] - result: 0
// [1] - result: 1

function countUniqueValues(input) {
  // return input.length if length is 0 or 1
  if (input.length === 0 || input.length === 1) return input.length;
  // set x = 0 y = 1
  // create a new array of unique values
  // push input[x] to uniqueArray
  // loop over input until y < input.length
  // if input[x] === input[y] then set y++;
  // input[x] !== input[y] then push input[y] to uniqueArray set x = y and y++
  const uniqueArray = [];
  let x = 0;
  let y = 1;
  uniqueArray.push(input[x]);
  while (y < input.length) {
    if (input[x] === input[y]) {
      y++;
    } else if (input[x] !== input[y]) {
      uniqueArray.push(input[y]);
      x = y;
      y++;
    }
  }
  return uniqueArray.length;
}


console.log(countUniqueValues([-3,-3,-2,-1,0,1,1,1,2]));
console.log(countUniqueValues([-3,-3,-3,-3,0,1,1,1,2]));
console.log(countUniqueValues([1,1,1,1,2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues([1]));
