import React ,{useState, useContext} from 'react'
import '../App.css'
import {moneyPyramid} from '../Helper/MoneyPyramid'
import {QuizContext} from '../Helper/Context'

const MoneyPyramid = () => {
    const {currQues, setCurrQues} = useContext(QuizContext);
    return (
        <div>
             <ul className="moneyList">
                   {moneyPyramid.map((moneyList)=>
                   (
                    <li className={currQues == moneyList.id -1 ? "moneyListItem active": "moneyListItem"}>
                    <span className="moneyListItemNumber">{moneyList.id}</span>
                    <span className="moneyListItemAmount">{moneyList.amount}</span>
                    </li>
                   )
                    )}
                    
                </ul>
        </div>
    )
}

export default MoneyPyramid
