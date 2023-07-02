function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
      return [];
    }
  
    const freqMap = new Map();
    const original = [];
  
    for (let num of changed) {
      freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }
  
    for (let [num, freq] of freqMap) {
      if (freqMap.get(num * 2) >= freq) {
        for (let i = 0; i < freq; i++) {
          original.push(num);
          freqMap.set(num * 2, freqMap.get(num * 2) - 1);
        }
      } else {
        return [];
      }
    }
  
    return original;
  }
  
  // Test the function with the given example
  const changed = [1, 3, 4, 2, 6, 8];
  const result = findOriginalArray(changed);
  console.log(result);
  