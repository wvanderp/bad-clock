import NormalClock from './clocks/normal';

const clocks = [
    NormalClock
];

const getRandomClock = () => clocks[Math.floor(Math.random() * clocks.length)];

export default getRandomClock;
