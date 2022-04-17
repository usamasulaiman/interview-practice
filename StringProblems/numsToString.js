/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const letters = { 1: 'a', 2: 'b', 3: 'c', 4: 'd', 5: 'e', 6: 'f', 7: 'g', 8: 'h', 9: 'i', 10: 'j', 11: 'k', 12: 'l', 13: 'm', 14: 'n', 15: 'o', 16: 'p', 17: 'q', 18: 'r', 19: 's', 20: 't', 21: 'u', 22: 'v', 23: 'w', 24: 'x', 25: 'y', 26: 'z' };
var getSmallestString = function (n, k) {

  let result = ''
  let temp = ''
  let newK = k
  let newN = n
  while (newK && newN) {
    if (newK - newN + 1 > 26) {
      temp += 'z'
      newK = newK - 26
      newN--
    } else if (newN === 1) {
      temp = letters[newK] + temp
      newK = 0
      newN--
    } else if (newN > 1) {
      result = result + 'a'
      newK = newK - 1
      newN--
    }
  }
  console.log('result is ', result, temp)
  return result + temp

};
getSmallestString(3, 27)
getSmallestString(5, 73)