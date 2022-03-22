/*
 * Given a rectangular matrix containing only digits, calculate the number of different 2 × 2 squares in it.
 */
const differentSquares = (matrix) => {
  let s = new Set();                                    //1
  for (let i = 0; i < matrix.length - 1; i++) {         //6
    for (let j = 0; j < matrix[0].length; j++) {        //6
      if (
        matrix[i][j] &&                                 //4
        matrix[i][j + 1] &&                             //5
        matrix[i + 1][j] &&                             //5
        matrix[i + 1][j + 1]                            //6
      ) {
        s.add(`${matrix[i][j]}${matrix[i][j + 1]}${matrix[i + 1][j + 1]}`);   //4
      }
    }
  }
  return s.size;                                         //1
};
/**
 * T_12(n) = 1 + 6i(6j(4+5+5+6+4))
 * T_12(n) = 1 + 6i(6j(24))
 * T_12(n) = 1 + i*j
 * T_12(n) = 1 + n**2
 * O(n**2)
 * Quadratique
 */