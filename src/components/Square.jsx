import { equalsCheck } from '../logic/utils.js'

export const Square = ({ updateBoard, linesSelected, index, value, invisible }) => {
  const handleLineClick = (borderIndex) => {
    const newLinesSelected = [...linesSelected]
    newLinesSelected[borderIndex] = true
    if (!equalsCheck(linesSelected, newLinesSelected)) {
      updateBoard(newLinesSelected, index, borderIndex)
    }
  }

  return (
    <div className={`square ${invisible ? 'invisible' : ''}`}>
        <div
        className={`line top ${linesSelected[0] ? 'selected' : ''}`}
        onClick={() => handleLineClick(0)}
        ></div>
        <div
        className={`line right ${linesSelected[1] ? 'selected' : ''}`}
        onClick={() => handleLineClick(1)}
        ></div>
        <div
        className={`line bottom ${linesSelected[2] ? 'selected' : ''}`}
        onClick={() => handleLineClick(2)}
        ></div>
        <div
        className={`line left ${linesSelected[3] ? 'selected' : ''}`}
        onClick={() => handleLineClick(3)}
        ></div>
        <div className="value">{value}</div>
    </div>
  )
}
