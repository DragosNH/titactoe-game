import './styles.scss';
import {useState} from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [squares, setSquares] = useState( Array(9).fill(null) );
  const [isXNext, setIsXNext] = useState(false);

  const winner = calculateWinner(squares);
  const nextPlayer = isXNext ? 'O' : 'X';
  const statusMessage = winner ? `Winner is ${winner}` : `Next player is ${nextPlayer}`;

  const handleSquareClick = (clickedPosition) => {

    if(squares[clickedPosition]  || winner){
        return;
    }

    setSquares(currentSquares => {
        return currentSquares.map ((SquareValue, position) => {
            if (clickedPosition === position) {
                return isXNext ? 'O' :  'X';
            }
            return SquareValue;
        })
    });

    setIsXNext(currentIsXNext => !currentIsXNext);
};

  return( 
    <div className='app'>
      <h2>{statusMessage}</h2>
      <Board squares={squares} handleSquareClick={handleSquareClick}/>
    </div>
  )

}

export default App
