import React from "react";
import getRandomClock from "./clocks";

export default function App() {
    const Clock = getRandomClock();
    return (
        <>
            <h1>Bad Clocks</h1>
            <Clock time={new Date()} />
        </>
    );
}
