import { TURNS } from '../constants.js'

export const updateAdjacentBorders = (board, index, borderIndex) => {
  const top = 0
  const right = 1
  const bottom = 2
  const left = 3
  const newBoard = [...board]
  const square = board[index[0]][index[1]]

  if (borderIndex === top) {
    if (checkValidIndex(index[0] - 1, index[1], newBoard)) {
      newBoard[index[0] - 1][index[1]].linesSelected[2] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === right) {
    if (checkValidIndex(index[0], index[1] + 1, newBoard)) {
      newBoard[index[0]][index[1] + 1].linesSelected[3] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === bottom) {
    if (checkValidIndex(index[0] + 1, index[1], newBoard)) {
      newBoard[index[0] + 1][index[1]].linesSelected[0] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === left) {
    if (checkValidIndex(index[0], index[1] - 1, newBoard)) {
      newBoard[index[0]][index[1] - 1].linesSelected[1] = square.linesSelected[borderIndex]
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
        if (!newBoard[i][j].linesSelected[n]) {
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
    .every((cell) => cell.linesSelected.every((line) => line === true))
}
