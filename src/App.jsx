import React, { useState } from 'react'
import { Square } from './components/Square'
import { updateAdjacentBorders, updateBoardValues } from './logic/board.js'

function App () {
  const [board, setBoard] = useState([[{ linesSelected: [true, false, false, true], value: false },
    { linesSelected: [true, false, false, false], value: false },
    { linesSelected: [true, true, false, false], value: false }],
  [{ linesSelected: [false, false, false, true], value: false },
    { linesSelected: [false, false, false, false], value: false },
    { linesSelected: [false, true, false, false], value: false }],
  [{ linesSelected: [false, false, true, true], value: false },
    { linesSelected: [false, false, true, false], value: false },
    { linesSelected: [false, true, true, false], value: false }]])

  const updateBoard = (linesSelected, index, borderIndex) => {
    let newBoard = [...board]
    newBoard[index[0]][index[1]].linesSelected = linesSelected
    newBoard = updateAdjacentBorders(newBoard, index, borderIndex)
    newBoard = updateBoardValues(newBoard)
    setBoard(newBoard)
  }

  return (
    <div className="board">
      <h1>Galletita game</h1>
      <section className='game3x3'>
        {
          board.map((row, rowIndex) => (
            row.map((square, columnIndex) => {
              return (
                <Square
                  key={rowIndex + columnIndex}
                  index={[rowIndex, columnIndex]}
                  updateBoard={updateBoard}
                  linesSelected={square.linesSelected}
                  value={square.value}
                />
              )
            })
          ))
        }
      </section>
    </div>
  )
}

export default App
