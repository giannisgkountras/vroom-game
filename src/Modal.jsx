import React, { useState } from "react";
import "./Modal.css";
export default function Modal({
    question,
    answers,
    correct,
    openModal,
    setOpenModal,
    currentStage,
    setCurrentStage,
}) {
    const [message, setMessage] = useState("");
    function checkCorrect(index) {
        if (index === correct) {
            setMessage("Απάντησες σωστά!");
            setTimeout(() => {
                setCurrentStage((prev) => prev + 1);
                setOpenModal(false);
                setMessage("");
            }, 1500);
        } else {
            setMessage("Λάθος απάντηση :(");
            setTimeout(() => {
                setCurrentStage(-1);
                setOpenModal(false);
                setMessage("");
            }, 1500);
        }
    }
    return (
        <div className={openModal ? "modal" : "disabled"}>
            <div className="modal-body">
                <h1>{question}</h1>
                <div className="answer-container">
                    {answers.map((ans, index) => (
                        <div
                            className="grid-item"
                            key={index}
                            onClick={() => checkCorrect(index)}
                        >
                            {ans}
                        </div>
                    ))}
                </div>
                <div className="message-ans">{message}</div>
            </div>
        </div>
    );
}
