import { useState } from "react";

export function LuckyNumberGenerator() {

    const [number, setNumber] = useState("");

    function generateNumber() {

        let luckyNumber = Math.floor(Math.random() * 100) + 1;

        setNumber(luckyNumber);
    }

    return (

        <div className="container mt-4">

            <h2>Lucky Number Generator</h2>

            <button
                className="btn btn-primary"
                onClick={generateNumber}
            >
                Generate Lucky Number
            </button>

            <h3 className="mt-3">
                Lucky Number : {number}
            </h3>

        </div>

    );
}