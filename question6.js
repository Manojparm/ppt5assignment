function findDuplicates(nums) {
    const duplicates = [];
  
    for (let i = 0; i < nums.length; i++) {
      const index = Math.abs(nums[i]) - 1;
  
      if (nums[index] < 0) {
        duplicates.push(index + 1);
      } else {
        nums[index] = -nums[index];
      }
    }
  
    return duplicates;
  }
  
  // Test the function with the given example
  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
  const result = findDuplicates(nums);
  console.log(result);
  