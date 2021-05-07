import React ,{useState} from 'react'
import './App.css';
import QuestionScreen from './Components/QuestionScreen';
import {QuizContext} from './Helper/Context'

function App() {
  const [currQues, setCurrQues] = useState(1)
  return (
    <div className="App">
      <QuizContext.Provider value={{ currQues, setCurrQues}}>
        <QuestionScreen/>
      </QuizContext.Provider>
    </div>
  );
}

export default App;
