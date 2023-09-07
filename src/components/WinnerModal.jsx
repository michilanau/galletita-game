export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const winnerText = winner === false ? 'Draw' : 'Winner:'

  return (
    <section className='winner'>
      <div className='text'>
        <div className="result">{winnerText}</div>

        <header className='win'>
          {winner && <div>{winner}</div>}
        </header>

        <footer>
          <button onClick={resetGame}>Empezar de nuevo</button>
        </footer>
      </div>
    </section>
  )
}
