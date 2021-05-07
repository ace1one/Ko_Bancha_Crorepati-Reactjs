import React ,{useContext} from 'react'
import {QuizContext} from '../Helper/Context'

const GameOver = () => {
    const {money} = useContext(QuizContext)
    return (
        <div>
            <h1>Game Over {money}</h1>
        </div>
    )
}

export default GameOver
