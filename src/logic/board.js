import { TURNS } from '../constants.js'

export const updateAdjacentLines = (board, index, lineIndex) => {
  const newBoard = [...board]
  const square = board[index[0]][index[1]]
  const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]] // [top, right, bottom, left]

  const adjacentX = index[0] + directions[lineIndex][0]
  const adjacentY = index[1] + directions[lineIndex][1]

  if (directions[lineIndex] && checkValidIndex(adjacentX, adjacentY, newBoard)) {
    newBoard[adjacentX][adjacentY].lines[getAdjacentLineIndex(lineIndex)] = square.lines[lineIndex]
  }

  return newBoard
}

const getAdjacentLineIndex = (lineIndex) => {
  if (lineIndex === 0) {
    return 2
  } else if (lineIndex === 1) {
    return 3
  } else if (lineIndex === 2) {
    return 0
  } else if (lineIndex === 3) {
    return 1
  }
}

const checkValidIndex = (row, column, board) => {
  return (row >= 0 && row < board.length && column >= 0 && column < board[row].length)
}

export const updateBoardValues = (board, turn) => {
  const newBoard = [...board]

  newBoard.forEach((row) => {
    row.forEach((square) => {
      if (square.lines.every((line) => line.selected) && square.value === '') {
        square.value = turn
      }
    })
  })

  return newBoard
}

export const countPoints = (board) => board.reduce((points, row) =>
  row.reduce((sum, square) => {
    if (square.value === TURNS.X) {
      sum.x++
    } else if (square.value === TURNS.O) {
      sum.o++
    }
    return sum
  }, points), { x: 0, o: 0 })

export const checkEndGame = (board) => {
  return !board.flat().some(cell =>
    cell.lines.some(linea =>
      !linea.selected && linea.style !== 'invisible'
    )
  )
}
