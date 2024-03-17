import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import { useState } from "react";

const initialBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
]

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  const [board, setBoard] = useState(initialBoard);


  const markSymbol =  (row, col, symbol) => {
      const newBoard = [...board.map(innerArray => [...innerArray])];
      newBoard[row][col] = symbol;
      setBoard(newBoard);
  }

  const updateBoard = (row, col, symbol) => {
      markSymbol(row, col, symbol);
      setActivePlayer((curActivePlayer) => curActivePlayer === 'X' ? 'O' : 'X');
  }

return (
  <main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === 'X'}/>
        <Player name="Player 2" symbol="O" isActive={activePlayer === 'O'}/>
      </ol>
      <GameBoard symbol={activePlayer} board={board} updateBoard={updateBoard}/>
      {/* <div className="game-over">
        <p>Game Over</p>
      </div> */}
    </div>
  </main>
)
}

export default App
