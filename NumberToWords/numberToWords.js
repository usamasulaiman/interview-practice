// Given a number 3478
// Return a string that describes the number in words
// e.g, 3478 = Three thousand, four hundred and seventy eight
// e.g, 234003 = Two hundred and thirty four thousand and three
// e.g, 23406757 = Twenty three million, four hundred and six thousand seven hundrend and fifty seven

// create a map of 0-9
function toOnes(number) {
  const ones = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
  }
  return ones[number];
}

// create a map of multiples of 10
function toTens(number) {
  const tens = {
    10: 'ten',
    20: 'twenty',
    30: 'thirty',
    40: 'fourty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  }
  return tens[number];
}

function divideNumber(num) {
  const arrayThousands = []
  arrayThousands.push(num % 1000);
  let newNumber = Math.floor(num / 1000);
  while (newNumber > 999) {
    arrayThousands.push(newNumber % 1000);
    newNumber = Math.floor(newNumber / 1000);
  }
  arrayThousands.push(newNumber);
  return arrayThousands;
}

function integerToString(num) {
  if (num < 0) return '';
  if (num === 0) return 'zero';

  let completeString = '';
  const hundredsGroup = ['thousand', 'million', 'billion', 'trillion'];
  
  const arrayThousands = divideNumber(num);

  for (let i = 0; i < arrayThousands.length; i++) {
    const groupNum = parseInt(arrayThousands[i], 10);
    const atOne = groupNum % 10;
    const atTen = groupNum > 9 ? Math.floor(groupNum % 100) - atOne : null;
    const atHundred = groupNum > 99 ? Math.floor(groupNum / 100) : null;

    const hundredth = atHundred ? `${toOnes(atHundred)} hundred` : '';
    const thousandth = i > 0 ? hundredsGroup[i - 1] : '';

    completeString = 
      `${hundredth} ${hundredth && (atTen || atOne) ? 'and' : ''} ${atTen ? toTens(atTen) : ''} ${atOne ? toOnes(atOne) : ''} ${thousandth} `
      + completeString;
  }
  return completeString;
}

console.log(72836757, '->', integerToString(72836757));