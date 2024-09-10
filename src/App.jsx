import { useState } from "react";
import Modal from "./Modal";
import data from "./data";
import "./App.css";
import Win from "./Win";
import Lose from "./Lose";

function App() {
    const [currentStage, setCurrentStage] = useState(0);
    const [openModal, setOpenModal] = useState(false);
    const [currentData, setCurrentData] = useState({
        question: "",
        answers: [],
        correct: -1,
    });
    // 0 is begin 6 is win, -1 is lose
    console.log(currentStage);
    return (
        <div className={`game-container stage-${currentStage}`}>
            <Modal
                question={currentData.question}
                answers={currentData.answers}
                correct={currentData.correct}
                openModal={openModal}
                setOpenModal={setOpenModal}
                currentStage={currentStage}
                setCurrentStage={setCurrentStage}
            />
            <h1 className={currentStage === 0 ? "vroom-game" : "disabled"}>
                The Vroom Game
            </h1>
            <button
                className={currentStage === 0 ? "start-game" : "disabled"}
                onClick={() => {
                    setCurrentData(data[0]);
                    setCurrentStage(1);
                }}
            >
                Start Game!
            </button>
            <div
                className={
                    currentStage !== 0 ? "buttons-container" : "disabled"
                }
            >
                <div
                    className="stage1btn"
                    onClick={() => {
                        setOpenModal(true);
                    }}
                ></div>
                <div
                    className="stage2btn"
                    onClick={() => {
                        setCurrentData(data[1]);
                        setOpenModal(true);
                    }}
                ></div>
                <div
                    className="stage3btn"
                    onClick={() => {
                        setCurrentData(data[2]);
                        setOpenModal(true);
                    }}
                ></div>
                <div
                    className="stage4btn"
                    onClick={() => {
                        setCurrentData(data[3]);
                        setOpenModal(true);
                    }}
                ></div>
                <div
                    className="stage5btn"
                    onClick={() => {
                        setCurrentData(data[4]);
                        setOpenModal(true);
                    }}
                ></div>
            </div>
            {currentStage === 6 ? <Win /> : ""}
            {currentStage === -1 ? <Lose /> : ""}
        </div>
    );
}

export default App;
