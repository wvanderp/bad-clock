import React from "react";
import BaseClock from "../BaseClock";

export default class NormalClock extends BaseClock {
    public canShowTime(time: Date): boolean {
        return true
    }
    public render(time: Date): React.ReactElement {
        return (<div>
            {time.toISOString()}
        </div>);
    }

}