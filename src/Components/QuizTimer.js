import React ,{useContext, useEffect} from 'react'
import {QuizContext} from '../Helper/Context'

const QuizTimer = () => {
    const {timer,setTimer,stopTimer,setScreen} = useContext(QuizContext)

    useEffect(() => {
        const interval= setTimeout(() => {
            if(stopTimer===false){
                if(timer ===0){
                    setTimeout(() => {
                        setScreen("GameOver")
                    }, 2000);
                }
                else{
                    setTimer(timer -1);
                }
                
            }
          
        }, 1000);
        return ()=> clearInterval(interval)
        
    })
    return timer
}

export default QuizTimer
