import MirrorClock from "./clocks/MirrorClock";
import NormalClock from "./clocks/normal";

const clocks = [
    // NormalClock,
    MirrorClock
];

const getRandomClock = () => clocks[Math.floor(Math.random() * clocks.length)];

export default getRandomClock;
