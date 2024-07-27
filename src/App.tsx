import { useState } from "react";
import clsx from "clsx";

export function App() {
  const [turn, setTurn] = useState(1);
  const [size] = useState(19);
  const [board, setBoard] = useState<number[]>(Array(size ** 2).fill(0));

  const putStone = (i: number) => {
    if (board[i] !== 0) return;

    const newBoard = [...board];
    newBoard[i] = turn;

    setTurn(turn === 1 ? 2 : 1);
    setBoard(newBoard);
  };

  return (
    <div className="App">
      <h1>Go game</h1>
      <div className="field">
        {board.map((stone, i) => (
          <button
            onClick={() => putStone(i)}
            className={clsx("cell", {
              black: stone === 1,
              white: stone === 2,
            })}
            key={i}
          ></button>
        ))}
      </div>
    </div>
  );
}
