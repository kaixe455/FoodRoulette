export function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

export function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}