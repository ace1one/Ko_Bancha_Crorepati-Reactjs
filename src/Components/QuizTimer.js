import React ,{useContext, useEffect} from 'react'
import {QuizContext} from '../Helper/Context'

const QuizTimer = () => {
    const {timer,setTimer} = useContext(QuizContext)

    useEffect(() => {
        const interval= setInterval(()=>{
            setTimer(timer -1);
        },1000);
        
    })
    return timer
}

export default QuizTimer
