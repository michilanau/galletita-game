import React, { useState } from 'react'
import { Square } from './components/Square'
import { countPoints, updateAdjacentBorders, updateBoardValues } from './logic/board.js'
import { TURNS } from './constants'
import { TurnAndPoints } from './components/TurnAndPoints'

function App () {
  const [board, setBoard] = useState([[{ linesSelected: [true, false, false, true], value: '' },
    { linesSelected: [true, false, false, false], value: '' },
    { linesSelected: [true, true, false, false], value: '' }],
  [{ linesSelected: [false, false, false, true], value: '' },
    { linesSelected: [false, false, false, false], value: '' },
    { linesSelected: [false, true, false, false], value: '' }],
  [{ linesSelected: [false, false, true, true], value: '' },
    { linesSelected: [false, false, true, false], value: '' },
    { linesSelected: [false, true, true, false], value: '' }]])

  const [turn, setTurn] = useState(TURNS.X)

  const [points, setPoints] = useState({ x: 0, o: 0 })

  const updateBoard = (linesSelected, index, borderIndex) => {
    let newBoard = [...board]
    newBoard[index[0]][index[1]].linesSelected = linesSelected
    newBoard = updateAdjacentBorders(newBoard, index, borderIndex)
    newBoard = updateBoardValues(newBoard, turn)
    const newPoints = countPoints(newBoard, points)
    if (newPoints.x === points.x && newPoints.o === points.o) {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
    setPoints(newPoints)
    setBoard(newBoard)
  }

  return (
    <div className="board" >
      <h1>Galletita game</h1>
      <section className='game3x3'>
        {
          board.map((row, rowIndex) => (
            row.map((square, columnIndex) => {
              return (
                <Square
                  key={rowIndex + '' + columnIndex}
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
      <TurnAndPoints turn={TURNS.X} points={points.x} isTurn={turn === TURNS.X}/>
      <TurnAndPoints turn={TURNS.O} points={points.o} isTurn={turn === TURNS.O}/>
    </div>
  )
}

export default App
