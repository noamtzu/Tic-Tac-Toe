import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { Board } from './Board';

export const Game: React.FC = () => {
  const navigate = useNavigate();
  let gameIsEnded = false;

  const [history, setHistory] = useState<Array<Array<string | null>>>([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState<number>(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;

  function handlePlay(nextSquares: Array<string | null>): void {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number): void {
    //revert move
    setCurrentMove(nextMove);
    //reset ended game
    gameIsEnded = false;
  }

  function logOut(): void {
    const auth = getAuth();
    if (auth.currentUser) {
      signOut(auth);
    } else {
      //in case of skip login method
      navigate('/');
    }
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  console.log(process.env.REACT_APP_USE_SERVER)

  return (
    <div className="game">
      <div className="game-board">
        <Board
          xIsNext={xIsNext}
          gameIsEnded={gameIsEnded}
          squares={currentSquares}
          onPlay={handlePlay}
        />
        <div className="logout-button">
          <button onClick={logOut}>Logout from the game</button>
        </div>
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
