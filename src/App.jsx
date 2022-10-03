import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [board, setBoard] = useState(["","","","","","","","",""])
  const [turn,setTurn] = useState(false)
  const [win,setWin] = useState(false)
  const [text,setText] = useState("X's turn")

  const newGame = () => {
    setBoard(["","","","","","","","",""])
  }

  const boolToLet = (B) => {
    return (B ? "X" : "O")
  }

  const winner = () => {
      setWin(true)
      setText("VICTORY")
  }

  const checkWin = () =>{
      if( board[0] != "" && board[0] == board[1] && board[1] == board[2] ||
        board[3] != "" && board[3] == board[4] && board[4] == board[5] ||
        board[6] != "" && board[6] == board[7] && board[7] == board[8])
      {
        winner()
      }
      else if( board[0] != "" && board[0] == board[3] && board[3] == board[6] ||
          board[1] != "" && board[1] == board[4] && board[4] == board[7] ||
          board[2] != "" && board[2] == board[5] && board[5] == board[8])
      {
        winner()
      }
      else if( board[0] != "" && board[0] == board[4] && board[4] == board[8] ||
          board[2] != "" && board[2] == board[4] && board[4] == board[6])
      {
        winner()
      }
  }

  


  useEffect(() => {
    checkWin()
  }, [board])
  


  const setPiece = (index) =>{
    if(board[index] == "" && !win)
    {
      let newBoard = [...board]
      setBoard(newBoard[index] = boolToLet(turn))
      setTurn(!turn)
      setText(newBoard[index]+"'s Turn")
      setBoard(newBoard)
    }
  }




  return (
    <div className="App">
      <div className="container">
        {
          board.map((text,index)=>{
            return(<button onClick={()=>setPiece(index)} key={index} className="square">{text}</button>)
          })
        }
      </div>
      <div>
        <p className='turn'>{text}</p>
      </div>
    </div>
  )
}

export default App
