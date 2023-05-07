function Game() {
    const [player, setPlayer] = useState(1);
    const [board, setBoard] = useState(Array(6).fill().map(() => Array(7).fill(0)));
    const [winner, setWinner] = useState(null);
  
    return (
      <div className="game">
        {winner ? (
          <div className="message">
            {winner === "draw" ? "It's a draw!" : `Player ${winner} wins!`}
          </div>
        ) : (
          <Board board={board} setBoard={setBoard} player={player} setPlayer={setPlayer} setWinner={setWinner} />
        )}
      </div>
    );
  }
  
  function handleClick(col) {
    for (let row = 5; row >= 0; row--) {
      if (board[row][col] === 0) {
        const newBoard = [...board];
        newBoard[row][col] = player;
        setBoard(newBoard);
        if (checkWin(newBoard, player, row, col)) {
          setWinner(player);
        } else if (checkDraw(newBoard)) {
          setWinner("draw");
        } else {
          setPlayer(player === 1 ? 2 : 1);
        }
        break;
      }
    }
  }
  function checkDraw(board) {
    return board.every(row => row.every(cell => cell !== 0));
  }
  