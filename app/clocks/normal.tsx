import React from "react";
import ClockProps from "../types/clockProps";

export default function NormalClock(props: ClockProps) {
    return (
        <div id={"clock"}>
            {props.time.toLocaleTimeString()}
        </div>
    );
}
