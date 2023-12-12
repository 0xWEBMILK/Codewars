function squareSum(numbers){
    return numbers.length == 0 ? 0 : numbers.map(item => item * item).reduce((acc, item) => acc + item)
  }