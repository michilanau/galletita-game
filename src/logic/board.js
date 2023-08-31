export const updateAdjacentBorders = (board, index, borderIndex) => {
  const newBoard = [...board]
  const square = board[index[0]][index[1]]

  if (borderIndex === 0) {
    if (checkValidIndex(index[0] - 1, index[1], newBoard)) {
      newBoard[index[0] - 1][index[1]].linesSelected[2] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === 1) {
    if (checkValidIndex(index[0], index[1] + 1, newBoard)) {
      newBoard[index[0]][index[1] + 1].linesSelected[3] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === 2) {
    if (checkValidIndex(index[0] + 1, index[1], newBoard)) {
      newBoard[index[0] + 1][index[1]].linesSelected[0] = square.linesSelected[borderIndex]
    }
  }

  if (borderIndex === 3) {
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

export const updateBoardValues = (board) => {
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
      if (allTrue) {
        newBoard[i][j].value = true
      } else {
        newBoard[i][j].value = false
      }
    }
  }
  return newBoard
}
