import React, {useContext, useState} from 'react'
import '../App.css'
import { data } from '../Helper/QuestionBank'
import {QuizContext} from '../Helper/Context'


const QuestionAnswer = () => {
    const {currQues, setCurrQues,setScreen,setMoney} = useContext(QuizContext);
    const [selectedAns, setSelectedAns] = useState("")
    const [selectedclassName, setClassName] = useState("answer")

    const delay=(timedelay,callbackfunc)=>{
      setTimeout(() => {
       callbackfunc()   
      }, timedelay);
    }

    const selectedAnswer=(anslist)=>{
        setSelectedAns(anslist)
        setClassName("answer active")
        delay(3000,()=> setClassName(anslist.correct? "answer correct":"answer wrong"))
        delay(8000,()=>{
            if(anslist.correct){
                setCurrQues(currQues+ 1)
            }
            else{
                setScreen("GameOver")
            }
        })
    }
    return (
    
            <div className="trivia">
                <div className="question">{data[currQues].question}</div>
                <div className="answers">
                    {
                        data[currQues].answers.map((anslist)=>(
                        <div className={selectedAns === anslist ? selectedclassName:"answer"  } 
                        onClick={()=>selectedAnswer(anslist)}>
                        {anslist.text}</div>
                        )

                        )
                    }
                    {/* <div className="answer wrong">wow</div>
                    <div className="answer">wow</div>
                    <div className="answer">wow</div>
                    <div className="answer">wow</div> */}
                </div>
            </div>
    )
}

export default QuestionAnswer
