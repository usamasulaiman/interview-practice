var addBinary = function(a, b) {
  if (a.length < 2 && b.length < 2 && a[0] == '0' && b[0] == '0') return '0'
  let result = ''
  let carry = ''
  while(a || b) {
      const lastA = a ? a[a.length - 1] : undefined;
      const lastB = b ? b[b.length - 1] : undefined
      if (lastA == lastB == 1) {
          result = (carry ? carry : '0') + result
          carry = '1'
      } else if (lastA != lastB && (lastA == 1 || lastB == 1)) {
          result = (carry ? '0' : '1') + result
      } else {
          result = carry + result
          carry = ''
      }
      a = a.substring(0, a.length > 1 ? a.length - 1 : 0)
      b = b.substring(0, b.length > 1 ? b.length - 1 : 0)

  }
  result = carry + result
  console.log('result', result)
  return result;
};

addBinary("0", "0")
addBinary("0", "1")
addBinary("1111", "1111")