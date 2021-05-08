import React ,{useContext} from 'react'
import {QuizContext} from '../Helper/Context'
import '../App.css'
const GameOver = () => {
    const {money, name} = useContext(QuizContext)
    return (
        <div className="gameover">
            <h1><b>Congratulations {name},</b> You have earned <b>{money}</b> /-</h1>
        </div>
    )
}

export default GameOver
