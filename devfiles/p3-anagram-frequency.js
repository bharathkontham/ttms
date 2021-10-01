// check if both strings are anagrams or not

// examples
// ('test', 'tets') true
// ('test', 'tsts') false
// ('testtwist', 'twisttest') true
// ('te twstist', 'twist test') true

function validAnagram(input1, input2) {
  // return false if length of input1 is not equal to input2
  if (input1.length !== input2.length) return false;
  const frequency1 = {};
  const frequency2 = {};
  for (let char of input1) {
    frequency1[char] = ++frequency1[char] || 1;
  }
  for (let char of input2) {
    frequency2[char] = ++frequency2[char] || 1;
  }
  for (let key in frequency1) {
    if (!frequency2.hasOwnProperty(key)) return false;
    if (frequency1[key] !== frequency2[key]) return false;
  }
  return true;
}

function validAnagram2(input1, input2) {
  // return false if length of input1 is not equal to input2
  if (input1.length !== input2.length) return false;
  const obj = {};
  for (let char of input1) {
    obj[char] = ++obj[char] || 1;
  }
  for (let char of input2) {
    if (!obj[char]) {
      return false;
    } else {
      obj[char]--;
    }
  }
  return true;
}

console.log(validAnagram('test', 'tets'));
console.log(validAnagram('test', 'tsts'));
console.log(validAnagram('te twstist', 'twist test'));

console.log(validAnagram2('test', 'tets'));
console.log(validAnagram2('test', 'tsts'));
console.log(validAnagram2('te twstitt', 'twist test'));
