import React ,{useState} from 'react'
import './App.css';
import GameOver from './Components/GameOver';
import QuestionScreen from './Components/QuestionScreen';
import {QuizContext} from './Helper/Context'

function App() {
  const [currQues, setCurrQues] = useState(0)
  const [screen,setScreen] =  useState("Quiz")
  const [money, setMoney] = useState("rs 0")
  const [timer,setTimer] = useState(30)
  return (
    <div className="App">
      <QuizContext.Provider value={{
           currQues,
           setCurrQues,
           setScreen,
           setMoney,
           money,
           timer,
           setTimer}}>
        {screen=== "Quiz" &&  <QuestionScreen/> }
        {screen=== "GameOver" &&  <GameOver/> }
       
      </QuizContext.Provider>
    </div>
  );
}

export default App;
