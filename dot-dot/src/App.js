import { useState } from 'react';

function Square({value, color, onSquaresClick}) {
  
  return (
    <button className='square' style={{backgroundColor: color}} onClick={onSquaresClick}>
      {value}
    </button>
  );
}

export default function Board() {
  const [squares, setSquares] = useState(Array(225).fill({value: null, color: 'white'}));

  const handleSquareClick = (index) => {
    const newSquares = [...squares];
    newSquares[index] = {...newSquares[index], color: newSquares[index].color === 'white'? 'black' : 'white'};
    
    setSquares(newSquares);
  }

  return (
    <>
      <div className='board-box'>
        {squares.map((square, index) => 
          <Square key={index} value={index} color={square.color} onSquaresClick={() => handleSquareClick(index)} />
        )}
      </div>
    </>
  );
}

// 지우개
// 크기 조절
// 색상 변경
// 바디가 아닌 배수에 맞게 칸 나누기