import React ,{useState, useContext} from 'react'
import '../App.css'
import {QuizContext} from '../Helper/Context'
import MoneyPyramid from './MoneyPyramid'
import QuestionAnswer from './QuestionAnswer'
import QuizTimer from './QuizTimer'

const QuestionScreen = () => {
   const {currQues, setCurrQues, timer} = useContext(QuizContext);
    return (
        <div className="QuestionScreen">
            <div className="main">
                <div className="top">
                <div className="timer"><QuizTimer/></div>
                </div>
                <div className="bottom">
                    <QuestionAnswer/>
                </div>
            </div>
            <div className="pyramid">
               <MoneyPyramid/>
            </div>
        </div>
    )
}

export default QuestionScreen
