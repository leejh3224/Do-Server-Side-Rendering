export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const INCREMENT_ASYNC = 'INCREMENT_ASYNC'

export const counterActions = {
    increment() {
        return { type: INCREMENT }
    },
    decrement() {
        return { type: DECREMENT }
    },
    incrementAsync() {
        return { type: INCREMENT_ASYNC }
    }
}
