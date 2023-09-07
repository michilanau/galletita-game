export const TurnAndPoints = ({ turn, points, isTurn }) => {
  const className = `turn ${isTurn ? 'is-turn' : ''}`

  return (
    <div className={className}>
        {turn}: {points}
    </div>
  )
}
