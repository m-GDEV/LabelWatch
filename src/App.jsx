import { useState } from "react";
import Stopwatch from "./componenets/Stopwatch.jsx";

export default function App() {
    const [stopwatches, setStopwatches] = useState([]);

    const addStopwatch = () => {
        let stopwatchId = new Date().getMilliseconds();

        const newStopwatch = {
            id: stopwatchId,
            element: (
                <Stopwatch
                    key={stopwatchId}
                    id={stopwatchId}
                    removeStopwatch={removeStopwatch}
                />
            ),
        };

        setStopwatches((prevElements) => [...prevElements, newStopwatch]);
    };

    const removeStopwatch = (stopwatchId) => {
        setStopwatches((prevElements) =>
            prevElements.filter((stopwatch) => stopwatch.id !== stopwatchId)
        );
    };

    return (
        <div className="bg-indigo-800 min-h-screen flex-col flex">
            <div className="flex-grow">
                <h1 className="text-6xl text-amber-400 text-center pt-5 pb-1">
                    LabelWatch
                </h1>
                <p className="text-sm text-gray-200 italic text-center">
                    {" "}
                    the stopwatch app with editable labels{" "}
                </p>
                <div className="py-2 pt-10 px-8">
                    <div>
                        {stopwatches.map((stopwatch) => stopwatch.element)}
                    </div>
                    <button
                        className="bg-indigo-700 text-lg px-3 py-2 mt-4 text-white rounded-lg border-amber-600 border-2"
                        onClick={addStopwatch}
                    >
                        + Add Stopwatch
                    </button>
                </div>
            </div>
            <footer className="flex-shrink">
                <p className="text-indigo-100 text-center pb-4">
                    Made with ❤️ 2023. Check out my Github profile with other
                    awesome projects{" "}
                    <a
                        href="https://github.com/m-GDEV"
                        className="text-amber-500"
                    >
                        here.
                    </a>
                </p>
            </footer>
        </div>
    );
}
