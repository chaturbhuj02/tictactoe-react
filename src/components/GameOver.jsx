export default function GameOver({winner, onClick}){
    return(
        <div id="game-over">
            <h2>Game Over!</h2>
            {winner && <p>{winner} won!</p>}
            {!winner && <p>It's a Draw!!</p>}
            <button onClick={onClick}>Rematch</button>
        </div>
    )
}