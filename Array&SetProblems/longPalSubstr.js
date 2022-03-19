var longestPalindrome = function(s) {
  const stringL = s.length;
  if (stringL < 2) return "";
  if (stringL === 2 && stringL[0] === stringL[1]) return `${stringL[0]}`

  const newQ = []
  
  const mapC = {}
  
  for (let i=0; i < stringL; i++) {
      const char = s[i]
      mapC[char] = !!mapC[char] && !! mapC[char][0] ? [mapC[char][0], i] : [i]
  }
  if (mapC.values.map())
  console.log('map of chars', mapC);
  return newQ;
};

longestPalindrome('babad')