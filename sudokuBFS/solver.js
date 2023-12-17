function isSafe(board, row, col, num) {
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num || board[x][col] === num) {
        return false;
      }
    }
  
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[startRow + i][startCol + j] === num) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  function solveSudoku(board) {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isSafe(board, row, col, num)) {
              board[row][col] = num;
  
              if (solveSudoku(board)) {
                return true;
              }
  
              board[row][col] = 0;
            }
          }
          return false;
        }
      }
    }
  
    return true;
  }
  
  function printSudoku(board) {
    for (let i = 0; i < 9; i++) {
      console.log(board[i].join(' '));
    }
    console.log('\n');
  }
  
  function solveSudokuBFS(initialBoard) {
    const queue = [initialBoard];
  
    while (queue.length > 0) {
      const currentBoard = queue.shift();
  
      let foundEmptyCell = false;
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (currentBoard[i][j] === 0) {
            foundEmptyCell = true;
            for (let num = 1; num <= 9; num++) {
              if (isSafe(currentBoard, i, j, num)) {
                const newBoard = JSON.parse(JSON.stringify(currentBoard));
                newBoard[i][j] = num;
                queue.push(newBoard);
              }
            }
            break;
          }
        }
        if (foundEmptyCell) {
          break;
        }
      }
  
      if (!foundEmptyCell && solveSudoku(currentBoard)) {
        return currentBoard;
      }
    }
  
    return null;
  }
  
  const easyLevelSudoku = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ];
  
  const mediumLevelSudoku = [
    [8, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 3, 6, 0, 0, 0, 0, 0],
    [0, 7, 0, 0, 9, 0, 2, 0, 0],
    [0, 5, 0, 0, 0, 7, 0, 0, 0],
    [0, 0, 0, 0, 4, 5, 7, 0, 0],
    [0, 0, 0, 1, 0, 0, 0, 3, 0],
    [0, 0, 1, 0, 0, 0, 0, 6, 8],
    [0, 0, 8, 5, 0, 0, 0, 1, 0],
    [0, 9, 0, 0, 0, 0, 4, 0, 0]
  ];
  
  const hardLevelSudoku = [
    [0, 0, 0, 0, 6, 0, 4, 0, 0],
    [0, 7, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 7, 0, 0, 0, 0, 0, 0],
    [0, 2, 5, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 5, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0]
  ];
  
  console.log("Easy Level Sudoku:");
  printSudoku(easyLevelSudoku);
  console.log("Easy Level Sudoku solved:");
  solveSudoku(easyLevelSudoku);
  printSudoku(easyLevelSudoku);
  
  console.log("Medium Level Sudoku:");
  printSudoku(mediumLevelSudoku);
  console.log("Medium Level Sudoku solved:");
  solveSudoku(mediumLevelSudoku);
  printSudoku(mediumLevelSudoku);
  
  console.log("Hard Level Sudoku:");
  printSudoku(hardLevelSudoku);
  console.log("Hard Level Sudoku solved:");
  solveSudoku(hardLevelSudoku);
  printSudoku(hardLevelSudoku);
  