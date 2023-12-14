/**
 * @param {character[][]} board
 * @return {void}
 */

function solveSudoku(board) {
    const n = board.length;
    if (dfs(board, n)) {
        console.log("Sudoku Solved:");
        console.log(board.map(row => row.join(" ")).join("\n"));
    } else {
        console.log("No solution exists.");
    }
}

function dfs(board, n) {
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            if (board[row][col] !== ".") continue;

            for (let i = 1; i <= 9; i++) {
                const c = i.toString();
                if (isValid(board, row, col, n, c)) {
                    board[row][col] = c;

                    if (dfs(board, n)) return true;
                }
            }

            board[row][col] = ".";
            return false;
        }
    }
    return true;
}

function isValid(board, row, col, n, newVal) {
    const boxRow = Math.floor(row / 3) * 3;
    const boxCol = Math.floor(col / 3) * 3;

    for (let i = 0; i < n; i++) {
        if (board[row][i] === newVal || board[i][col] === newVal) return false;

        const curRow = boxRow + Math.floor(i / 3);
        const curCol = boxCol + Math.floor(i % 3);

        if (board[curRow][curCol] === newVal) return false;
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
        ["8", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "3", "6", ".", ".", ".", ".", "."],
        [".", "7", ".", ".", "9", ".", "2", ".", "."],
        [".", "5", ".", ".", ".", "7", ".", ".", "."],
        [".", ".", ".", ".", "4", "5", "7", ".", "."],
        [".", ".", ".", "1", ".", ".", ".", "3", "."],
        [".", ".", "1", ".", ".", ".", ".", "6", "8"],
        [".", ".", "8", "5", ".", ".", ".", "1", "."],
        [".", "9", ".", ".", ".", ".", "4", ".", "."]
    ],
    [
        [".", ".", ".", ".", "6", ".", "4", ".", "."],
        [".", "7", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", "7", ".", ".", ".", ".", ".", "."],
        [".", "2", "5", ".", ".", ".", ".", ".", "."],
        ["6", ".", ".", ".", "5", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."],
        [".", ".", ".", ".", ".", ".", ".", ".", "."]
    ]
];

puzzles.forEach((puzzle, index) => {
    console.log(`Solving Puzzle ${index + 1}:`);
    solveSudoku(puzzle);
    console.log("\n");
});
