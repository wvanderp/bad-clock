import { ReactElement } from "react";

export default abstract class BaseClock {

    /**
     * a function that checks if the clock implementation can show the time
     * @param time the time we want to display
     * @returns {boolean} wheter the class can display the clock
     */
    public abstract canShowTime(time: Date): boolean;
    
    /**
     * a function that renders the clock to a specific time
     * @param time the time we want to display
     * @returns {ReactElement} a react element showing the clock
     */
    public abstract render(time: Date): ReactElement
}