// implement bubble sort
// start loop at the end of array with variable i
// start inner loop with variable j from beginning to i-1
// if arr[j] > arr[j+1] then swap

function bubblesort(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j <= i - 1; j++) {
      // console.log(`i, j, j+1 : ${i}, ${j}, ${j+1}; arr[i], arr[j], arr[j+1] : ${arr[i]}, ${arr[j]}, ${arr[j+1]};`)
      if (arr[j] > arr[j+1]) {
        let temp = arr[j+1];
        arr[j+1] = arr[j];
        arr[j] = temp;
      }
      // console.log(arr);
    }
  }
  return arr;
}

function swap(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
}

function bubblesortswap(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let noswap = true;
    for (let j = 0; j <= i - 1; j++) {
      // console.log(`i, j, j+1 : ${i}, ${j}, ${j+1}; arr[i], arr[j], arr[j+1] : ${arr[i]}, ${arr[j]}, ${arr[j+1]};`)
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1)
        noswap = false;
      }
      // console.log(arr);
    }
    if (noswap) break;
  }
  return arr;
}

console.log(bubblesort([5,4,7,8,15,1,17,3]));
console.log(bubblesortswap([5,4,7,8,15,1,17,3]));

function bubbleSort(arr){

  //Outer pass
  for(let i = 0; i < arr.length; i++){

      //Inner pass
      for(let j = 0; j < arr.length - i - 1; j++){

          //Value comparison using ascending order

          if(arr[j + 1] < arr[j]){

              //Swapping
              [arr[j + 1],arr[j]] = [arr[j],arr[j + 1]]
          }
      }
  };
  return arr;
};

console.log(bubbleSort([5,3,8,4,6]));
