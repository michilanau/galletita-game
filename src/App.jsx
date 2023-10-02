import React, { useState } from 'react'
import { Square } from './components/Square'
import { checkEndGame, countPoints, updateAdjacentLines, updateBoardValues } from './logic/board.js'
import { TURNS, BOARD } from './constants'
import { TurnAndPoints } from './components/TurnAndPoints'
import { WinnerModal } from './components/WinnerModal'
import confetti from 'canvas-confetti'

function App () {
  const [board, setBoard] = useState(JSON.parse(JSON.stringify(BOARD)))
  const [turn, setTurn] = useState(TURNS.X)
  const [points, setPoints] = useState({ x: 2, o: 2 })
  const [winner, setWinner] = useState(null)

  const updateBoard = (lines, index, lineIndex) => {
    let newBoard = [...board]
    lines[lineIndex].style = turn === TURNS.X ? 'red' : 'blue'
    newBoard[index[0]][index[1]].lines = lines
    newBoard = updateAdjacentLines(newBoard, index, lineIndex)
    newBoard = updateBoardValues(newBoard, turn)
    const newPoints = countPoints(newBoard, points)
    if (newPoints.x === points.x && newPoints.o === points.o) {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
    }
    setPoints(newPoints)
    setBoard(newBoard)

    if (checkEndGame(newBoard)) {
      if (newPoints.o === newPoints.x) {
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
      <section className='game'>
        {
          board.map((row, rowIndex) => (
            row.map((square, columnIndex) => {
              return (
                <Square
                  key={rowIndex + '' + columnIndex}
                  index={[rowIndex, columnIndex]}
                  updateBoard={updateBoard}
                  lines={square.lines}
                  value={square.value}
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
