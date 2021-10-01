// implement insertion sort
// start loop at the second element of array with variable i
// compare with j = i-1 loop until <=0 to find the correct spot and insert.

function insertionsort(arr) {
  if (arr.length <= 1) return arr;
  // console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    let newIndex = i - 1;
    for (let j = i-1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j+1] = arr[j];
      newIndex = j-1;
    }
    arr[newIndex+1] = currentVal;
    console.log(arr);
  }
  return arr;
}


console.log(insertionsort([5,4,7,8,15,1,17,3]));
console.log(insertionsort([17,1,2,3,4,5,6,7]));

function insertionSort(arr){
  //Start from the second element.
  for(let i = 1; i < arr.length;i++){

      //Go through the elements behind it.
      for(let j = i - 1; j > -1; j--){
          
          //value comparison using ascending order.
          if(arr[j + 1] < arr[j]){

              //swap
              [arr[j+1],arr[j]] = [arr[j],arr[j + 1]];

          }
      }
  };

return arr;
}

console.log(insertionSort([23, 1, 10, 5, 2]));
