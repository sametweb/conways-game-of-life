/*
    Conway's Game of Life
    Represent each cell with an instance of a Cell class
    Represent each grid with an instance of a Grid class
    Initialization of Grid class creates all required Cell instances
    Cell knows its coordinates in the grid
    Cell knows the grid's size
    Cell can tell if it's a edge cell or not
    Cell can tell how many neighbors are alive in a cycle
*/

export class Cell {
  constructor(is_alive, is_edge) {
    this.is_alive = is_alive;
    this.is_edge = is_edge;
  }
}

export class Grid {
  constructor(rows = 25, cols = 25) {
    this.rows = rows;
    this.cols = cols;

    let grid = {};
    for (let row = 0; row < this.rows; row++) {
      grid[row] = {};
      for (let col = 0; col < this.cols; col++) {
        let is_edge =
          row === 0 ||
          col === 0 ||
          row === this.rows - 1 ||
          col === this.cols - 1;
        grid[row][col] = new Cell(0, is_edge);
      }
    }
    this.grid = grid;
  }

  cell(row, col) {
    return this.grid[row][col];
  }

  toggle_life(row, col) {
    if (this.cell(row, col).is_alive) {
      this.cell(row, col).is_alive = 0;
      return this.cell(row, col).is_alive;
    } else {
      this.cell(row, col).is_alive = 1;
      return this.cell(row, col).is_alive;
    }
  }

  is_edge(row, col) {
    return this.cell(row, col).is_edge;
  }

  neighbor_count(row, col) {
    let count = 0;
    if (this.is_edge(row, col)) {
      return count;
    }
    let topL = this.cell(row - 1, col - 1).is_alive;
    let top = this.cell(row - 1, col).is_alive;
    let topR = this.cell(row - 1, col + 1).is_alive;
    let left = this.cell(row, col - 1).is_alive;
    let right = this.cell(row, col + 1).is_alive;
    let botL = this.cell(row + 1, col - 1).is_alive;
    let bot = this.cell(row + 1, col).is_alive;
    let botR = this.cell(row + 1, col + 1).is_alive;

    count = topL + top + topR + left + right + botL + bot + botR;
    return count;
  }

  total_cell_count() {
    return this.current_life().reduce((acc, rows) => {
      return (
        acc +
        rows.reduce((total, cell) => {
          return total + cell;
        }, 0)
      );
    }, 0);
  }

  current_life() {
    return Object.values(this.grid).map((line) =>
      Object.values(line).map((cell) => cell.is_alive)
    );
  }

  next_life() {
    let new_game = new Grid(this.rows, this.cols);

    let result = Object.values(this.grid).map((rowArray, row) => {
      return Object.values(rowArray).map((cell, col) => {
        if (!cell.is_edge) {
          if (cell.is_alive) {
            if (
              this.neighbor_count(row, col) === 2 ||
              this.neighbor_count(row, col) === 3
            ) {
              return new_game.toggle_life(row, col);
            } else {
              return new_game.cell(row, col).is_alive;
            }
          } else {
            if (this.neighbor_count(row, col) === 3) {
              return new_game.toggle_life(row, col);
            } else {
              return new_game.cell(row, col).is_alive;
            }
          }
        } else {
          return new_game.cell(row, col).is_alive;
        }
      });
    });
    this.grid = new_game.grid;
    return result;
  }
}
