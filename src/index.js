
// You should implement your task here.

module.exports = function towelSort(matrix) {
  let reversedArrDouble = [];
  let reversedArrSingle = [];

  if (arguments.length === 0){
    return []
  }

  if (matrix.length === 0)  {
    return []
  }

  reversedArrDouble = matrix.map(function (currentValue, index) {
    if (index % 2 !== 0) {
      return currentValue.sort((a, b) => b - a);
    } else {
      return currentValue;
    }
  });

  reversedArrSingle = reversedArrDouble.reduce(function (prev, item) {
    return prev.concat(item)
  })

  return reversedArrSingle;
}
