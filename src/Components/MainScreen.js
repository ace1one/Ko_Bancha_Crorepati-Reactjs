import React,{useRef,useContext} from 'react'
import {QuizContext} from '../Helper/Context'

const MainScreen = () => {
    const {setName,setScreen} = useContext(QuizContext);
    const inputRef = useRef();
    const handleClick = () => {
        inputRef.current.value && setName(inputRef.current.value);
        setScreen("Quiz")
      };
    return (
        <div className="start">
                <input
                className="startInput"
                placeholder="enter your name"
                ref={inputRef}
                />
                <button className="startButton" onClick={handleClick}>
                Start
                </button>
      </div>
    )
}

export default MainScreen
