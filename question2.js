function arrangeCoins(n) {
    let rows = 0;
    let i = 1;
  
    while (n >= i) {
      rows++;
      n -= i;
      i++;
    }
  
    return rows;
  }
  
  // Test the function with the given example
  const n = 5;
  const result = arrangeCoins(n);
  console.log(result);
  