import React ,{useState, useContext, useEffect} from 'react'
import '../App.css'
import {moneyPyramid} from '../Helper/MoneyPyramid'
import {QuizContext} from '../Helper/Context'

const MoneyPyramid = () => {
    const {currQues, setCurrQues, setMoney,money} = useContext(QuizContext);

    //execute if cruuent question and monypyramide changes
    useEffect(() => {
      currQues > 0 && setMoney(moneyPyramid.find(m=> m.id  ===currQues).amount)
    }, [currQues, moneyPyramid])
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
