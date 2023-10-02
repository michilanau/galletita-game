import { TURNS } from '../constants.js'

// A esto se le tiene que hacer un refactor
export const updateAdjacentLines = (board, index, lineIndex, turn) => {
  const top = 0
  const right = 1
  const bottom = 2
  const left = 3
  const newBoard = [...board]
  const square = board[index[0]][index[1]]

  if (lineIndex === top) {
    if (checkValidIndex(index[0] - 1, index[1], newBoard)) {
      newBoard[index[0] - 1][index[1]].lines[2] = square.lines[lineIndex]
    }
  }

  if (lineIndex === right) {
    if (checkValidIndex(index[0], index[1] + 1, newBoard)) {
      newBoard[index[0]][index[1] + 1].lines[3] = square.lines[lineIndex]
    }
  }

  if (lineIndex === bottom) {
    if (checkValidIndex(index[0] + 1, index[1], newBoard)) {
      newBoard[index[0] + 1][index[1]].lines[0] = square.lines[lineIndex]
    }
  }

  if (lineIndex === left) {
    if (checkValidIndex(index[0], index[1] - 1, newBoard)) {
      newBoard[index[0]][index[1] - 1].lines[1] = square.lines[lineIndex]
    }
  }

  return newBoard
}

const checkValidIndex = (row, column, board) => {
  if (row >= 0 && row < board.length && column >= 0 && column < board[row].length) {
    return true
  } else {
    return false
  }
}

export const updateBoardValues = (board, turn) => {
  const newBoard = [...board]
  let allTrue = true

  for (let i = 0; i < newBoard.length; i++) {
    for (let j = 0; j < newBoard[i].length; j++) {
      allTrue = true
      for (let n = 0; n < 4 && allTrue; n++) {
        if (!newBoard[i][j].lines[n].selected) {
          allTrue = false
        }
      }
      if (allTrue && newBoard[i][j].value === '') {
        newBoard[i][j].value = turn
      }
    }
  }
  return newBoard
}

export const countPoints = (board) => {
  const newPoints = { x: 0, o: 0 }
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j].value === TURNS.X) {
        newPoints.x++
      } else if (board[i][j].value === TURNS.O) {
        newPoints.o++
      }
    }
  }
  return newPoints
}

export const checkEndGame = (board) => {
  return board
    .flat()
    .filter((cell) => !cell.invisible)
    .every((cell) => cell.lines.every((line) => line.selected === true))
}
