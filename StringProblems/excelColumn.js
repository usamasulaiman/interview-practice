/**
 * @param {number} columnNumber
 * @return {string}
 */
//  var convertToTitle = function(columnNumber) {
//   const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//   if (columnNumber.length === 1) return (letters.indexOf(columnNumber) + 1)
//   // const mapOfLetters = new Map();
//   // for (let i = 0; i < 26; i++) mapOfLetters.set(letters[i],i+1);
//   return ((26 * (letters.indexOf(columnNumber[0]) + 1)) + (letters.indexOf(columnNumber[1]) + 1))
// };

var convertToTitle = function(columnNumber) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  console.log('console', letters[columnNumber - 1])
  if (columnNumber < 27) return (letters[columnNumber - 1])
  const lastLetter = columnNumber % 26;
  return (`${letters[((columnNumber - lastLetter) / 26) - 1]}${letters[lastLetter - 1]}`)
};

console.log('number is: ', convertToTitle(1));