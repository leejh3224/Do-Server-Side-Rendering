const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min)) + min

export const fetchCounter = callback => {
    setTimeout(() => {
        callback(getRandomInt(1, 100))
    }, 300)
}
