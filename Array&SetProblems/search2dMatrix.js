/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function(matrix, target) {
  if (matrix.length > 1) {
    const halfway = matrix[Math.floor(matrix.length / 2)]
    if (target > halfway[halfway.length - 1])
      return searchMatrix(matrix.slice(Math.floor(matrix.length / 2), matrix.length), target)
    else if (target >= halfway[0])
      return (halfway.indexOf(target) !== -1)
    else
      return searchMatrix(matrix.slice(0, Math.ceil(matrix.length / 2)), target)
  }
  return (matrix[0].indexOf(target) !== -1)      
};

// console.log('found target: ',searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]],11));
console.log('found target: ',searchMatrix([[1],[3]],3));