import React from "react";

function GameTutorial(props) {
  return (
    <div>
      <h3>
        Let's talk about Conway's Game of Life before you create your first grid
        planet!
      </h3>
      <p>
        In Conway's Game of Life, there is one rule: A cell must have enough
        neighbors to stay alive!
      </p>
      <li>
        If a cell is alive and has two or three neighbors alive, that cell lives
        to the next generation.
      </li>
      <li>
        If a cell is dead and has exactly three neighbors alive, that cell comes
        to life.
      </li>
      <h3>Now let's get you started.</h3>
      Enter how many rows and columns you want in your planet and create your
      grid. Then set your speed, color, and starting cells. You may either
      select each cell manually, or create random live cells, or select from
      sample grids.
    </div>
  );
}

export default GameTutorial;
