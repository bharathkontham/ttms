// implement selection sort
// start loop at the start of array with variable i
// set minValue as index 0
// start inner loop with variable j from i+1
// compare i, j to get min value and set to minValue
// at the end swap minValue with i

function selectionsort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let minValueIndex = i;
    for (let j = i+1; j <= arr.length; j++) {
      if (arr[j] < arr[minValueIndex]) minValueIndex = j
    }
    if (i !== minValueIndex) swap(arr, i, minValueIndex)
    console.log(arr);
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

console.log(selectionsort([5,4,7,8,15,1,17,3]));
console.log(selectionsort([17,1,2,3,4,5,6,7]));
