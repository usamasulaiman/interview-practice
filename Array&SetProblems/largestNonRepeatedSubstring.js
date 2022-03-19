/**
 * @param {string} s
 * @return {number}
 */

//Moving window
var lengthOfLongestSubstring = function(s) {
  let i = 0;           // starting position
  let visited = {}     // hash of visited variables
  let maxLength = 0;   // max length found in string
  for(let j = 0;j< s.length;j++){       // start moving window 
      let char = s[j];                 // save the character to a variable because I get easily confused
      console.log('starting at', i, 'char is: ', char, 'visited is: ', visited[char], maxLength,);
      // if we have visited the character before, this is a "duplicate" char and update the beggining of the window accordingly
      if(char in visited) i = Math.max(i,visited[char])
      
      maxLength = Math.max(maxLength, j-i+1) // update the max length to be either the current max or the current length found
      
      // add the character to our visited hash and the value will be the position i would need to take if a duplicate is found which is why we add 1
      visited[char] = j+1   
  }
  console.log('max length', maxLength)
  //once moving window is finished, return the maxLength
  return maxLength;
};
lengthOfLongestSubstring('abcabcbb')