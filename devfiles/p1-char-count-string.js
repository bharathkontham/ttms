function charCount(str) {
  // create result object which will returned at the end
  const result = {};
  // loop over string characters
  for (let i = 0; i < str.length; i++) {
    // if str[i] is not alphanumeric then ignore
    // if lowercase of str[i] key exists in result object then add 1 to value
    // if lowercase of str[i] key does not exists in result object then set value to 1
    if (str[i].match(/[a-zA-Z0-9]/)) {
      const lcase = str[i].toLowerCase();
      if (result.hasOwnProperty(lcase)) {
        result[lcase]++;
      } else {
        result[lcase] = 1;
      }
    }
  }
  // return result object
  return result;
}

function charCount2(str) {
  // create result object which will returned at the end
  const result = {};
  // loop over string characters
  for (let char of str) {
    // convert char to lowercase
    // if char is not alphanumeric then ignore
    // if lowercase of char key exists in result object then add 1 to value
    // if lowercase of char key does not exists in result object then set value to 1
    if (isCharAlphaNumeric(char)) {
      char = char.toLowerCase();
      result[char] = ++result[char] || 1;
    }
  }
  // return result object
  return result;
}

function isCharAlphaNumeric(input) {
  const code = input.charCodeAt(0);
  // check char against utf16 range values
  // (code > 47 && code < 58) numbers in utf16
  // (code > 64 && code < 91) uppercase alphabets(A-Z) in utf16
  // (code > 96 && code < 123) lowercase alphabets(a-z) in utf16
  if ((code > 47 && code < 58) ||
    (code > 64 && code < 91) ||
    (code > 96 && code < 123)) {
    return true;
  }
  return false;
}

const exampleInput = 'test12345 micDDDD test';
const t1 = Date.now();
console.log(charCount(exampleInput));
const t2 = Date.now();
console.log(`charCount() executed in ${(t2-t1) / 1000} seconds`);
const t3 = Date.now();
console.log(charCount2(exampleInput));
const t4 = Date.now();
console.log(`charCount2() executed in ${(t4-t3) / 1000} seconds`);
