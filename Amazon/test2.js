function findRemainingBalls(direction, strength) {
  // Write your code here
  const totalRemaining = new Set([]);
    
    for (let i = 0; i < direction.length; i++) {
        if ((direction[i] > 0 && direction[i-1]) < 0 || (direction[i] < 0 && direction[i-1] > 0)) {
            if (strength[i] > strength[i-1]) {
                if (totalRemaining.has(strength[i-1])) totalRemaining.delete(strength[i-1])
                totalRemaining.add(i)
            } else if (strength[i] < strength[i-1]) {
                if (totalRemaining.has(strength[i])) totalRemaining.delete(strength[i])
                totalRemaining.add(i-1)
            }
            
        } else {
            totalRemaining.add(i)
        }
    }
    console.log('total', totalRemaining)
    return totalRemaining
}

findRemainingBalls([3,1,-1,1], [3,5,3,1])
