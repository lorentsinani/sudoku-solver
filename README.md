# Sudoku Solver

This program is designed to solve Sudoku puzzles of varying difficulty levels using backtracking with Depth-First Search (DFS) and Breadth-First Search (BFS) algorithms.

## Features

- Solves Sudoku puzzles using backtracking with DFS and BFS algorithms.
- Supports puzzles of different difficulty levels: easy, medium, and hard.

## Usage

1. Clone this repository:

    ```bash
    git clone https://github.com/lorentsinani/sudoku-solver.git
    ```

2. Navigate to the project directory:

    ```bash
    cd sudoku-solver
    ```

3. Run the program using Node.js:

    ```bash
    node solver.js
    ```

4. The program will display solutions for Sudoku puzzles included in the code.

## File Structure

- `solver.js`: Contains the JavaScript code for solving Sudoku puzzles using DFS and BFS algorithms.
- `README.md`: This file explaining the program and its usage.

## Puzzle Definitions

The puzzles are defined within the `solver.js` file under the `puzzles` array. You can add or modify puzzles in this array to test the solver with different Sudoku configurations.

## Algorithms Used

### Backtracking Algorithm

The backtracking algorithm, part of the DFS approach, systematically tries different possibilities, backtracking when it reaches an invalid state, until a solution is found.

### Depth-First Search (DFS)

The DFS algorithm explores possible solutions by recursively trying different numbers for each cell until a valid solution is found.

### Breadth-First Search (BFS)

The BFS algorithm systematically explores all possible solutions level by level, ensuring an optimal solution by traversing the search space breadthwise.

## Contributing

Contributions are welcome! Feel free to submit issues, enhancement requests, or pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Authors

[Andi Hyseni](https://github.com/Andi6H)

[Albin Bajrami](https://github.com/Albiinn)

[Lorent Sinani](https://github.com/lorentsinani)
