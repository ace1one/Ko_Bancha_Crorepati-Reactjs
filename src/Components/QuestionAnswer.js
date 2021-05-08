import React, {useContext, useState, useEffect} from 'react'
import '../App.css'
import { data } from '../Helper/QuestionBank'
import {QuizContext} from '../Helper/Context'
import useSound from 'use-sound';
import play from '../sounds/play.mp3'
import wait from '../sounds/wait.mp3'
import wrong from '../sounds/wrong.mp3'
import correct from '../sounds/correct.mp3'


const QuestionAnswer = () => {
    const {currQues, setCurrQues,setScreen,setMoney,setTimer,setStopTimer,timer} = useContext(QuizContext);
    const [selectedAns, setSelectedAns] = useState("")
    const [selectedclassName, setClassName] = useState("answer")
    const [start]= useSound(play)
    const [waitnext]= useSound(wait)
    const [ansCorrect]= useSound(correct)
    const [ansWrong]= useSound(wrong)

    useEffect(() => {    
            start()        
      }, [start,currQues])
  

    const delay=(timedelay,callbackfunc)=>{
      setTimeout(() => {
       callbackfunc()   
      }, timedelay);
    }
     

    const selectedAnswer=(anslist)=>{
        setSelectedAns(anslist)
        setClassName("answer active")
        setStopTimer(true)
        delay(3000,()=> setClassName(anslist.correct? "answer correct":"answer wrong"))
        delay(5000,()=>{
            if(anslist.correct){
                ansCorrect()
                delay(8000,()=>{
                    setCurrQues(currQues+ 1)   
                    setTimer(30)
                    setStopTimer(false)   
                })                     
            }
            else{
                data[currQues].answers.find(ans => ans.correct ? setClassName("answer correct"): "answer")
                ansWrong()
               
                // delay(5000,()=>{
                //   setScreen("GameOver")
                // })              
            }
        })
    }
    return (
      <>
        {currQues  <= 14 ? 
            <div className="trivia">
            <div className="question">{data[currQues].question}</div>
            <div className="answers">
                {
                    data[currQues].answers.map((anslist)=>(
                    <div className={selectedAns === anslist ? selectedclassName:"answer" } 
                    onClick={()=>selectedAnswer(anslist)}>
                    {anslist.text}</div>
                    )

                    )
                }
            </div>
        </div>
        : setScreen("GameOver")
         }
    </>
           
    )
}

export default QuestionAnswer
