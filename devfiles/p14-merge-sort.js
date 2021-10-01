// Merge 2 sorted arrays into single sorted array
// [1,10,50] [2,14,99,100,120] => [1,2,10,14,50,99,100,120]
// i=0,j=0 i < j break j; => [1] i++
// i=1,j=0 i>j break j; => [1,2] j++
// i=1,j=1


// [2,10,50] [1,14,99,100,120] => [1,2,10,14,50,99,100,120]
// i=0,j=0 i > j break j; => [1]
// i=0,j=1
function merge(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0,mid));
  const right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100, 120]));
// console.log(merge([2, 14, 99, 100, 120], [1, 10, 50]));

console.log(mergeSort([2, 14, 99, 100, 120, 1, 10, 50]));
