import React, { useState } from 'react'
import { Square } from './components/Square'
import { checkEndGame, countPoints, updateAdjacentBorders, updateBoardValues } from './logic/board.js'
import { TURNS, BOARD } from './constants'
import { TurnAndPoints } from './components/TurnAndPoints'
import { WinnerModal } from './components/WinnerModal'
import confetti from 'canvas-confetti'

function App () {
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(BOARD)))
  const [turn, setTurn] = useState(TURNS.X)
  const [points, setPoints] = useState({ x: 0, o: 0 })
  const [winner, setWinner] = useState(null)

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

    if (checkEndGame(newBoard)) {
      if (newPoints.o === newPoints.y) {
        setWinner(false)
      } else {
        confetti()
        if (newPoints.o > newPoints.x) {
          setWinner(TURNS.O)
        } else {
          setWinner(TURNS.X)
        }
      }
    }
  }

  const resetGame = () => {
    setBoard(JSON.parse(JSON.stringify(BOARD)))
    setTurn(TURNS.X)
    setPoints({ x: 0, o: 0 })
    setWinner(null)
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
                  invisible={square.invisible}
                />
              )
            })
          ))
        }
      </section>
      <TurnAndPoints turn={TURNS.X} points={points.x} isTurn={turn === TURNS.X}/>
      <TurnAndPoints turn={TURNS.O} points={points.o} isTurn={turn === TURNS.O}/>

      <WinnerModal resetGame={resetGame} winner={winner} />

    </div>
  )
}

export default App
