// Read N Characters Given Read4, call read multiple times

/**
 * Definition for read4()
 * 
 * @param {character[]} buf Destination buffer
 * @return {number} The number of characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
var solution = function (read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  this.buf4 = [];
  this.total = 0;
  this.times = 0;
  return function (buf, n) {
    let testbuf = [];
    let total = 0;
    let read_chars = read4(testbuf);
    console.log(testbuf);
    for (let i = this.total; i < read_chars; i++) {
      if (this.total === n) {
        break;
      }
      buf[this.total] = this.buf4[i];
      this.total++;
    }
    return this.total;
  };
};
