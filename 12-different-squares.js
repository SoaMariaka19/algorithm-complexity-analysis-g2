/*
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
 */
const differentSquares = (matrix) => {
  let s = new Set();
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (
        matrix[i][j] &&
        matrix[i][j + 1] &&
        matrix[i + 1][j] &&
        matrix[i + 1][j + 1]
      ) {
        s.add(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j + 1]}`);
      }
    }
  }
  return s.size;
};
