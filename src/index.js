module.exports = function towelSort(matrix) {
  if (matrix === undefined || !matrix) {
    return [];
  }
  const res = [];
  for (let i = 0; i < matrix.length; i += 1) {
    if (i % 2 !== 0) {
      matrix[i].reverse();
    }
    for (let j = 0; j < matrix[i].length; j += 1) {
      res.push(matrix[i][j]);
    }
  }
  return res;
};
