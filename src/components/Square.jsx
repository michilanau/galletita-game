export const Square = ({ index, updateBoard, lines, value }) => {
  const handleLineClick = (lineIndex) => {
    const newLines = [...lines]
    if (!newLines[lineIndex].selected) {
      newLines[lineIndex].selected = true
      newLines[lineIndex].style = true
      updateBoard(newLines, index, lineIndex)
    }
  }

  return (
    <div className={'square'}>
        <div
        className={`line top ${lines[0].selected ? 'selected' : ''} ${lines[0].style}`}
        onClick={() => handleLineClick(0)}
        ></div>
        <div
        className={`line right ${lines[1].selected ? 'selected' : ''} ${lines[1].style}`}
        onClick={() => handleLineClick(1)}
        ></div>
        <div
        className={`line bottom ${lines[2].selected ? 'selected' : ''} ${lines[2].style}`}
        onClick={() => handleLineClick(2)}
        ></div>
        <div
        className={`line left ${lines[3].selected ? 'selected' : ''} ${lines[3].style}`}
        onClick={() => handleLineClick(3)}
        ></div>
        <div className="value">{value}</div>
    </div>
  )
}
