/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
  if (!s.length || s.length > 15) return;
  let result = 0;
  let r = s.replace('IV', 'A')
  r = r.replace('IX', 'B')
  r = r.replace('XL', 'E')
  r = r.replace('XC', 'F')
  r = r.replace('CD', 'G')
  r = r.replace('CM', 'H')
  
  const hashmap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    A: 4,
    B: 9,
    E: 40,
    F: 90,
    G: 400,
    H: 900,
  };

  for (const char of r) {
    result += hashmap[char];
  }
  return result;
};

romanToInt('III');