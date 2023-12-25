const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  // Helper function to check if a cell is valid
  function isValidCell(row, col) {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  // Helper function to count neighboring mines
  function countNeighboringMines(row, col) {
    let count = 0;

    // Define neighboring directions
    const directions = [
      [-1, -1], [-1, 0], [-1, 1],
      [0, -1],           [0, 1],
      [1, -1], [1, 0], [1, 1]
    ];

    for (const [dr, dc] of directions) {
      const newRow = row + dr;
      const newCol = col + dc;

      if (isValidCell(newRow, newCol) && matrix[newRow][newCol]) {
        count++;
      }
    }

    return count;
  }

  // Create the Minesweeper game setup
  const result = [];

  for (let row = 0; row < rows; row++) {
    const newRow = [];

    for (let col = 0; col < cols; col++) {
      newRow.push(countNeighboringMines(row, col));
    }

    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper
};
