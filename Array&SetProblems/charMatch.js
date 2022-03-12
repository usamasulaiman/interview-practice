// Given two strings, 'aabbss', 'jjjdww'
// Return true if any character matches between the two string, otherwise return false

function stringsCompare(string1, string2) {
  const string1Set = new Set;
  for (const char in string1) {
    string1Set.add(char);
  }
  for (const char of string2) {
    if (string1Set.has(char)) {
      return true;
    }
  }
  return false;
}

console.log('result is: ', stringsCompare('asdfceddd', 'kkjjiimlo'));