import React ,{useState, useContext} from 'react'
import '../App.css'
import {QuizContext} from '../Helper/Context'
import MoneyPyramid from './MoneyPyramid'
import QuestionAnswer from './QuestionAnswer'

const QuestionScreen = () => {
   const {currQues, setCurrQues} = useContext(QuizContext);
    return (
        <div className="QuestionScreen">
            <div className="main">
                <div className="top">
                    <div className="timer">30</div>
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
