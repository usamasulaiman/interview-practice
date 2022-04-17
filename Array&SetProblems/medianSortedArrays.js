/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
 var findMedianSortedArrays = function(num1Set, num2Set) {
  if (num1Set[num1Set.length - 1] === 0 && num2Set[num2Set.length - 1] === 0) return 0
  if (num1Set[num1Set.length - 1] === 0) return (num1Set.length % 2 > 0) ? num1Set[Math.ceil(num1Set.length/2) - 1] : (num1Set[(num1Set.length/2) - 1] + num1Set[(num1Set.length/2)]) / 2
  if (num2Set[num2Set.length - 1] === 0) return (num2Set.length % 2 > 0) ? num2Set[Math.ceil(num2Set.length/2) - 1] : (num2Set[(num2Set.length/2) - 1] + num2Set[(num2Set.length/2)]) / 2

  if (num1Set.length === num2Set.length && num2Set.length === 1) return ((num1Set[0] + num2Set[0]) / 2)

  let combined = [];

  while (num1Set.length && num2Set.length) {
    if (num2Set[0] && num1Set[0] > num2Set[0]) {
      combined.push(num2Set[0])
      num2Set.shift()
    } else if (num2Set[0] && num1Set[0] < num2Set[0]){
      combined.push(num1Set[0])
      num1Set.shift()
    } else if (num2Set[0] === num1Set[0]) {
      combined.push(num1Set[0])
      num1Set.shift()
      num2Set.shift()
    }
  }
  if (num1Set.length) combined = [...combined, ...num1Set]
  else if (num2Set.length) combined = [...combined, ...num2Set]
  const result = (combined.length % 2 > 0) ? combined[Math.ceil(combined.length/2) - 1] : (combined[(combined.length/2) - 1] + combined[(combined.length/2)]) / 2;
  console.log('result', combined, result)
  return result
};

findMedianSortedArrays([2,2,4,4], [2,2,4,4])
findMedianSortedArrays([0,0], [0, 0])
findMedianSortedArrays([1,2], [3, 4])
findMedianSortedArrays([1,2, 4, 5], [3, 6])
findMedianSortedArrays([5], [5])