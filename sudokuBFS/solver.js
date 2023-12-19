/**
 * @param {character[][]} board
 * @return {void}
 */

function solveSudoku(board) {
  const n = board.length;
  const queue = [];

  queue.push(board);

  while (queue.length > 0) {
      const currentBoard = queue.shift();
      const emptyCell = findEmptyCell(currentBoard, n);

      if (!emptyCell) {
          console.log("Sudoku Solved:");
          console.log(currentBoard.map(row => row.join(" ")).join("\n"));
          return;
      }

      const [row, col] = emptyCell;

      for (let i = 1; i <= 9; i++) {
          const newVal = i.toString();
          if (isValid(currentBoard, row, col, n, newVal)) {
              const newBoard = copyBoard(currentBoard);
              newBoard[row][col] = newVal;
              queue.push(newBoard);
          }
      }
  }

  console.log("No solution exists.");
}

function findEmptyCell(board, n) {
  for (let row = 0; row < n; row++) {
      for (let col = 0; col < n; col++) {
          if (board[row][col] === ".") {
              return [row, col];
          }
      }
  }
  return null;
}

function copyBoard(board) {
  return board.map(row => [...row]);
}

function isValid(board, row, col, n, newVal) {
  const boxRow = Math.floor(row / 3) * 3;
  const boxCol = Math.floor(col / 3) * 3;

  for (let i = 0; i < n; i++) {
      if (board[row][i] === newVal || board[i][col] === newVal) {
          return false;
      }

      const curRow = boxRow + Math.floor(i / 3);
      const curCol = boxCol + Math.floor(i % 3);

      if (board[curRow][curCol] === newVal) {
          return false;
      }
  }

  return true;
}

// easy, medium, hard
const puzzles = [
  [
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"]
  ],
  [
    ["7", "8", ".", ".", ".", ".", "5", ".", "6"],
    [".", "6", "5", "8", ".", "4", ".", ".", "."],
    [".", ".", ".", "6", ".", ".", ".", "8", "9"],
    [".", ".", "7", "1", ".", ".", ".", ".", "."],
    ["4", ".", "6", ".", ".", "9", ".", ".", "1"],
    ["1", "2", ".", "3", ".", ".", "8", "6", "."],
    [".", ".", ".", ".", "3", "1", "9", ".", "."],
    [".", ".", ".", ".", ".", ".", "1", ".", "."],
    ["3", "9", "1", ".", ".", ".", "6", "5", "4"]
  ],
  [
    ["9", ".", ".", ".", ".", ".", "5", "3", "."],
    ["2", ".", ".", "8", ".", "1", ".", ".", "9"],
    [".", "3", ".", ".", ".", "9", ".", "2", "7"],
    ["3", ".", ".", ".", ".", ".", ".", "6", "."],
    [".", ".", "6", "9", ".", "8", ".", ".", "4"],
    ["4", "9", ".", "7", ".", ".", ".", ".", "."],
    [".", ".", "4", ".", ".", ".", ".", "1", "."],
    [".", ".", ".", "1", ".", "7", ".", ".", "."],
    ["1", ".", ".", ".", ".", ".", ".", ".", "."]
  ]
];

puzzles.forEach((puzzle, index) => {
  console.log(`Solving Puzzle ${index + 1}:`);
  solveSudoku(puzzle);
  console.log("\n");
});
