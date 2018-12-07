export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

export const counterActions = {
    increment() {
        return { type: INCREMENT }
    },
    decrement() {
        return { type: DECREMENT }
    }
}
