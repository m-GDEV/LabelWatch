import { useState, useEffect } from "react";

export default function Stopwatch(props) {
    const [elapsedTime, setElapsedTime] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isRunning) {
            intervalId = setInterval(() => {
                setElapsedTime((prevElapsedTime) => prevElapsedTime + 75); // Increment the elapsed time by 10 milliseconds (adjust as needed)
            }, 75); // Update the elapsed time every 10 milliseconds (adjust as needed)
        }

        return () => {
            clearInterval(intervalId);
        };
    }, [isRunning]);

    const startStopwatch = () => {
        setIsRunning(true);
    };

    const stopStopwatch = () => {
        setIsRunning(false);
    };

    const resetStopwatch = () => {
        setElapsedTime(0);
        setIsRunning(false);
    };

    const deleteStopwatch = () => {
        props.removeStopwatch(props.id);
    };

    const displayTime = (time) => {
        // The 'time' variable is in milliseconds

        let h = Math.floor(time / 1000 / 60 / 60);
        let m = Math.floor((time / 1000 / 60 / 60 - h) * 60);
        let s = Math.floor(((time / 1000 / 60 / 60 - h) * 60 - m) * 60);
        let ms = Math.floor(
            (((time / 1000 / 60 / 60 - h) * 60 - m) * 60 - s) * 60
        );

        h < 10 ? (h = `0${h}`) : (h = `${h}`);
        m < 10 ? (m = `0${m}`) : (m = `${m}`);
        s < 10 ? (s = `0${s}`) : (s = `${s}`);
        ms < 10 ? (ms = `0${ms}`) : (ms = `${ms}`);

        return <span>{`${h} : ${m} : ${s} : ${ms}`}</span>;
    };

    return (
        <div className="rounded-lg bg-indigo-900 py-3 px-5 my-2 border-2 border-indigo-500">
            <div className="flex flex-row justify-center">
                <input
                    className="text-center text-indigo-100 text-xl flex-grow rounded border-none bg-indigo-900 placeholder-indigo-100"
                    autoComplete="off"
                    placeholder="click to change me!"
                />
            </div>
            <p className="text-xl text-indigo-200 text-center">
                {displayTime(elapsedTime)}
            </p>
            <div className="flex flex-row mt-1">
                <button
                    className="text-gray-100 py-1 px-2 bg-indigo-500 rounded-md flex-grow mx-1"
                    onClick={startStopwatch}
                >
                    Start
                </button>
                <button
                    className="text-gray-100 py-1 px-2 bg-indigo-600 rounded-md flex-grow mx-1"
                    onClick={stopStopwatch}
                >
                    Stop
                </button>
                <button
                    className="text-gray-100 py-1 px-2 bg-indigo-400 rounded-md flex-grow mx-1"
                    onClick={resetStopwatch}
                >
                    Restart
                </button>
                <button
                    className="text-gray-100 py-1 rounded-md flex-grow"
                    onClick={deleteStopwatch}
                >
                    ❌
                </button>
            </div>
        </div>
    );
}
