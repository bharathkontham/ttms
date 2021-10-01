// check if a value is available in sorted array using divide and conquer method
// examples
// [1,4,6,7,8,11,15,18,24,44,66,69,81,91,97] mid = 18 index 7
// [999,88,76,44,33,22,11,9,8,7,6,4] mid = 22 index 6

function binarySearch(arr, val) {
  if (!arr.length) return -1;
  let leftPointer = 0;
  let rightPointer = arr.length - 1;
  let midpoint = Math.floor((leftPointer + rightPointer) / 2);
  while (arr[midpoint] !== val && leftPointer <= rightPointer) {
    if (val > arr[midpoint]) leftPointer = midpoint + 1
    else rightPointer = midpoint - 1
    midpoint = Math.floor((leftPointer + rightPointer) / 2);
  }
  return arr[midpoint] === val ? midpoint : -1;
}

console.log(binarySearch([1,4,6,7,8,11,15,18,24,44,66,69,81,91,97], 69));
console.log(binarySearch([99, 101, 112, 115, 119, 121], 115));
console.log(binarySearch([99, 101, 112, 115, 119, 121], 122));
console.log(binarySearch([99, 101, 112, 115, 119, 122, 126, 129], 122));
