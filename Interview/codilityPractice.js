// function solution(nums) {
//   // write your code in JavaScript (Node.js 8.9.4)
//   const sorted = nums.sort().map(num => num > 0 ? num : 0)
//   if (!sorted.length || sorted[sorted.length - 1] < 1) return 1;
//   for(let i = 0; i < sorted.length; i++) {
//       if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1
//   }
//   return sorted[sorted.length - 1] + 1
// }

function solution(sorted) {
  // write your code in JavaScript (Node.js 8.9.4)
  if (sorted.length === 1 && sorted[0] < 1) return 1;
  for(let i = 0; i < sorted.length; i++) {
      if (sorted[i + 1] - sorted[i] > 1) return sorted[i] + 1
  }
  return sorted[sorted.length - 1] + 1
}

console.log('smallest is: ', solution([1,2,3]));
console.log('smallest is: ', solution([-1,1,2,3]));
console.log('smallest is: ', solution([-1,-3]));
console.log('smallest is: ', solution([1, 3, 6, 4, 1, 2]));
