function convertTo2DArray(original, m, n) {
    if (original.length !== m * n) {
      return []; // Invalid dimensions
    }
  
    const result = [];
    for (let i = 0; i < m; i++) {
      const start = i * n;
      const end = start + n;
      result.push(original.slice(start, end));
    }
  
    return result;
  }
  
  // Test the function with the given example
  const original = [1, 2, 3, 4];
  const m = 2;
  const n = 2;
  const result = convertTo2DArray(original, m, n);
  console.log(result);
  