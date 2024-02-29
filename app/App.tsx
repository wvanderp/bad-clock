import React from "react";
import getRandomClock from "./clocks";
import SevenSegmentDisplay from "./helper/SevenSegmentDisplay/SevenSegmentDisplay";
import RoundClock from "./helper/RoundClock/RoundClock";

export default function App() {
    const Clock = getRandomClock();
    const clockElement = new Clock().render(new Date());
    return (
        <>
            <h1>Bad Clocks</h1>
            <RoundClock hourAngle={0} minuteAngle={90} secondAngle={270} />
            {/* {clockElement} */}
        </>
    );
}
