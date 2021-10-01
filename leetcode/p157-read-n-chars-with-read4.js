// Read N Characters Given Read4

/**
 * Definition for read4()
 * 
 * @param {character[]} buf4 Destination buffer
 * @return {number} The number of actual characters read
 * read4 = function(buf4) {
 *     ...
 * };
 */

/**
 * @param {function} read4()
 * @return {function}
 */
 var solution = function(read4) {
  /**
   * @param {character[]} buf Destination buffer
   * @param {number} n Number of characters to read
   * @return {number} The number of actual characters read
   */
  return function(buf, n) {
      let tmp = [];
      let read_chars = 4;
      let total = 0;
      while(read_chars === 4 && total < n) {
          read_chars = read4(tmp);
          for (let i = 0; i < read_chars; i++) {
              if (total === n) return total;
              buf[total] = tmp[i];
              total++;
          }
      }
      return total;
  };
};