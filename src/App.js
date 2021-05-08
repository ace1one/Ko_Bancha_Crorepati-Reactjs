import React ,{useState} from 'react'
import './App.css';
import GameOver from './Components/GameOver';
import MainScreen from './Components/MainScreen';
import QuestionScreen from './Components/QuestionScreen';
import {QuizContext} from './Helper/Context'

function App() {
  const [currQues, setCurrQues] = useState(13)
  const [screen,setScreen] =  useState("MainScreen")
  const [money, setMoney] = useState("rs 0")
  const [timer,setTimer] = useState(30)
  const [stopTimer, setStopTimer]= useState(false)
  const [name, setName] = useState("")
  return (
    <div className="App">
      <QuizContext.Provider value={{
           currQues,setCurrQues,
           setScreen,
           money, setMoney,
           name,setName,
           timer,setTimer,
           stopTimer,setStopTimer}}>
        {screen=== "MainScreen" &&  <MainScreen/> }
        {screen=== "Quiz" &&  <QuestionScreen/> }

        {screen=== "GameOver" &&  <GameOver/> }
        
       
      </QuizContext.Provider>
    </div>
  );
}

export default App;
