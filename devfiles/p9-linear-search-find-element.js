// check if a value exists in array
// return index if found otherwise return -1

function linearArraySearch(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) return i;
  }
  return -1;
}

console.log(linearArraySearch([4,5,6,2,44,22], 44));
console.log(linearArraySearch([4,5,6,2,44,22], 444));
