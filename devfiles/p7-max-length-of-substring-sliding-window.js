// find max length of sub string with unique values
// input will be a string

// examples
// aabsbssssbcdgfll  // sbcdgfl 7
// aabsbssssbcdgfls  // sbcdgfl & bcdgfls 7
// aabsbssssbcdgflse  // bcdgflse 8

function maxLengthOfSubstring(input) {
  let inputIndex = {};
  let maxLength = 0;
  let startIndex = 0;
  // loop over input
  for (let i = 0; i < input.length; i++) {
    // check if input[i] exists in inputIndex
    if (inputIndex.hasOwnProperty(input[i])) {
      startIndex = Math.max(startIndex, inputIndex[input[i]] + 1);
    }
    maxLength = Math.max(maxLength, i - startIndex + 1);
    // push input[i] in inputIndex
    inputIndex[input[i]] = i;
  }
  return maxLength;
}

console.log(maxLengthOfSubstring('aabssabes'));
console.log(maxLengthOfSubstring('aabsbssssbcdgfll'));
console.log(maxLengthOfSubstring('aabsbssssbcdgfls'));
console.log(maxLengthOfSubstring('aabsbssssbcdgflseeeeeeeeasdnejkpoiu'));
console.log(maxLengthOfSubstring('aabac'));
console.log(maxLengthOfSubstring('b'));
console.log(maxLengthOfSubstring(''));
