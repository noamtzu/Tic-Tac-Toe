import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { Square } from './Square';
import { BoardProps } from '../../interfaces/Board';
import { calculateWinner } from '../../utils/helper';

export const Board: React.FC<BoardProps> = ({ xIsNext, gameIsEnded, squares, onPlay }) => {
    const [status, setStatus] = useState("");
  const handleClick = (i: number): void => {
    // Do nothing in case the square is full or the game is ended
    if (gameIsEnded || squares[i]) {
      return;
    }

    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    onPlay(nextSquares);
  };

  useEffect(() => {
      //const winner: string | null = calculateWinner(squares);
      axios.post('http://localhost:4000/calculate-winner', squares)
          .then(response => {
              const data = response.data.toString();
              if (data && data.length > 0) {
                  setStatus('Winner: ' + data);
                  gameIsEnded = true;
              } else {
                  setStatus('Next player: ' + (xIsNext ? 'X' : 'O'));
              }
          })
          .catch(error => {
              console.error('Error sending data:', error);
          });
  }, );

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
};
