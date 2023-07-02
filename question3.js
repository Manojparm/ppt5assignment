function sortedSquares(nums) {
    const squared = [];
  
    // Square each number and push to the squared array
    for (let i = 0; i < nums.length; i++) {
      squared.push(nums[i] * nums[i]);
    }
  
    // Sort the squared array in non-decreasing order
    squared.sort((a, b) => a - b);
  
    return squared;
  }
  
  // Test the function with the given example
  const nums = [-4, -1, 0, 3, 10];
  const result = sortedSquares(nums);
  console.log(result);
  