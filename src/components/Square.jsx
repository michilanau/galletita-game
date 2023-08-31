export const Square = ({ updateBoard, linesSelected, index, value }) => {
  const handleLineClick = (borderIndex) => {
    const newLinesSelected = [...linesSelected]
    newLinesSelected[borderIndex] = !newLinesSelected[borderIndex]
    updateBoard(newLinesSelected, index, borderIndex)
  }

  return (
    <div className="square">
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
        {value ? 'X' : ''}
    </div>
  )
}
