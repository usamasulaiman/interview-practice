var isValid = function(s) {
  // create a hashmap of characters
  // create a current value
  // if 
  // check if the value of key at current position matches the value of the key at position + 1
  // skip one item and repeat
  if (s.length <=1) return;
  if (s.length % 2 > 0) return;
  
  const hash = { ')': '(',  '}': '{', ']': '['};
  let stack = [];
  
  for (let i=0; i<s.length; i++) {
    let current = s[i];
    const currentPair = hash[current];
    const lastChar = stack[stack.length - 1]
    console.log('_________________')
    console.log('current pair is', currentPair, current, 'with last char: ', lastChar)
      if (currentPair) {
          if (currentPair === lastChar) {
            console.log('going to pop', stack, 'for: ', current);
              stack.pop()
          } else {
              return false;    
          }
      } else {
        console.log('going to push', current, 'in stack:', stack)
          stack.push(current);
      }
  }
  console.log('before return', stack)
  return !stack.length
};


// console.log('result is :',isValid('(){}[}'));
console.log('result is :',isValid('{[]}'));
// console.log('result is :',isValid('[]'));