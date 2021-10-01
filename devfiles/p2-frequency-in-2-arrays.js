// there are 2 inputs, each an array of numbers
// numbers is 2nd array are squares of 1st array
// squared numbers in 2nd array can be in any order
// squared numbers must repeat in same frequency as 1st

function squaredArrayCheck(array1, array2) {
  //  check if both arrays have same length, if not then return false
  if (array1.length != array2.length) return false;
  // create result variable, default is true
  let result = true;
  // loop through array1 and check if square of element is present in array2
  // if squared value is not found then set result to false and break loop
  // if squared value is found then push index of 2nd array value in array2Indexes
  // if index for square of element repeats then skip that index by passing value in indexOf
  // if squared value is found again then push index of 2nd array value in array2Indexes
  const array2Indexes = [];
  for (let el of array1) {
    const index = array2.indexOf(el * el);
    if (index > -1) {
      if (array2Indexes.indexOf(index) === -1) {
        array2Indexes.push(index);
      } else if (array2Indexes.indexOf(index) > -1 && array2.indexOf(el * el, array2Indexes.indexOf(index) + 1) > -1) {
        array2Indexes.push(array2.indexOf(el * el, array2Indexes.indexOf(index) + 1));
      } else {
        result = false;
        break;
      }
    } else {
      result = false;
      break;
    }
  }
  // return the result;
  return result;
}

const exampleInput1 = [1, 2, 3];
const exampleInput2 = [9, 1, 4]; // true

const example1Input1 = [2, 2, 3];
const example1Input2 = [4, 9, 4]; // true

const example2Input1 = [1, 1, 3];
const example2Input2 = [9, 1]; // false

const example3Input1 = [2, 2, 1];
const example3Input2 = [4, 1, 4]; // false

console.log(squaredArrayCheck(exampleInput1, exampleInput2));
console.log(squaredArrayCheck(example1Input1, example1Input2));
console.log(squaredArrayCheck(example2Input1, example2Input2));
console.log(squaredArrayCheck(example3Input1, example3Input2));

function squaredArrayCheck2(array1, array2) {
  //  check if both arrays have same length, if not then return false
  if (array1.length != array2.length) return false;
  for (let el of array1) {
    const index = array2.indexOf(el ** 2);
    if (index === -1) {
      return false;
    }
    array2.splice(index, 1);
  }
  return true;
}

// console.log(squaredArrayCheck2(exampleInput1, exampleInput2));
// console.log(squaredArrayCheck2(example1Input1, example1Input2));
// console.log(squaredArrayCheck2(example2Input1, example2Input2));
// console.log(squaredArrayCheck2(example3Input1, example3Input2));

function squaredArrayCheck3(array1, array2) {
  //  check if both arrays have same length, if not then return false
  if (array1.length != array2.length) return false;
  const frequencyInArray1 = {};
  const frequencyInArray2 = {};
  for (let el of array1) {
    frequencyInArray1[el] = ++frequencyInArray1[el] || 1;
  }
  for (let el of array2) {
    frequencyInArray2[el] = ++frequencyInArray2[el] || 1;
  }
  for (let key in frequencyInArray1) {
    if(!(key ** 2 in frequencyInArray2)) return false;
    if (frequencyInArray1[key] !== frequencyInArray2[key ** 2]) return false;
  }
  return true;
}

console.log(squaredArrayCheck3(exampleInput1, exampleInput2));
console.log(squaredArrayCheck3(example1Input1, example1Input2));
console.log(squaredArrayCheck3(example2Input1, example2Input2));
console.log(squaredArrayCheck3(example3Input1, example3Input2));
