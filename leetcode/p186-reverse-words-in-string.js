/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseWords = function (s) {
  // reverse words in string array;
  s = s.reverse();
  let start = 0;
  let end = 0;
  while (start < s.length) {
    console.log(`1.start, end`, start, end)
    while (end < s.length && s[end] !== ' ') {
      end++;
    }
    console.log(`2.start, end`, start, end)
    reverseword(s, start, end-1);
    console.log(`3.start, end`, start, end)
    start = end + 1;
    end++;
    console.log(`4.start, end`, start, end)
  }
};
// b l u e
// e u l b
// 0,3 b u l e
// 1,2 b l u e
function reverseword(s, start, end) {
  while (start < end) {
    let temp =  s[start];
    s[start] = s[end];
    s[end] = temp;
    start++;
    end--;
  }
}
var abc = ["t", "h", "e", " ", "s", "k", "y", " ", "i", "s", " ", "b", "l", "u", "e"];
reverseWords(abc);
console.log(abc);
