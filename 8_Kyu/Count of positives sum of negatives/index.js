function countPositivesSumNegatives(input) {
  let result = [0, 0];
  
  input.map(item => item > 0 ? result[0] += 1 : result[1] += item)
  
  return result
}