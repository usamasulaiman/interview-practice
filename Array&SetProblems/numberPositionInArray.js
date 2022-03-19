var searchInsert = function(nums, target) {

  if (nums[nums.length - 1] < target) return nums.length;
    let numL = 0
    
  while (nums && nums.length) {
      const middle = nums.length > 1 ? Math.ceil(nums.length / 2) : 0
      console.log('middle is ', middle, nums[middle],target)
      if (nums[middle] === target) return middle
      if (nums[middle] > target) {
          if (nums.length > 1) nums = nums.splice(0,middle);
          else return middle
      } else {
          if (nums.length > 1) {
              nums = nums.splice(middle, nums.length - 1)
              numL += middle 
          }
          else return numL+1
      }
  }
};

searchInsert([1,3,4,5,6,8,10],5)