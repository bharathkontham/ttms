// for input sorted array of unique integers if sum of any pair is 0 then return pair
// return undefined if not found

// example [-3,-2,-1,0,1,2,3] [-3,3]
// [-3,-2,-1,0,1,2,3] [-2,2]
// [-2,0,1,3] undefined

function sumZero(input) {
  // loop over input
  // set x = 0 and y = input.length - 1
  // run loop if x < y otherwise return undefined
  // check the sum of input[x] and input[y]
  // step1: if sum is 0 then return [input[x], input[y]]
  // outcome1: if sum is > 0 then set y = y-1
  // otherwise check sum of x and y and check from step1 again
  // outcome2: if sum is < 0 then set x = x+1
  // otherwise check sum of x and y and check from step1 again
  let x = 0;
  let y = input.length - 1;
  while (x < y) {
    const sum = input[x] + input[y];
    if (sum === 0) {
      return [input[x], input[y]];
    } else if (sum > 0) {
      y--;
    } else if (sum < 0) {
      x++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-3, -2, -1, 0, 1, 2, 4]));
console.log(sumZero([-2, 0, 1, 3]));
console.log(sumZero([-2, -1, 0, 1, 3, 5]));
