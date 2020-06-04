// create a function to create a store...
function createStore(reducer) {
    // 1. the state.
    // 2. get the state.
    // 3. listen to the changes on the state.
    // 4. update the state

    // This variable will hold the entire state...
    let state
    let listeners = []

    // this is to get the state...
    const getState = () => state

    //listen to the changes on the state.
    const subscribe = (listener) => {
        listeners.push(listener)

        return () => {
            listeners = listeners.filter((l) => l!== listener)
        }
    }

    //update state...
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }

    return {
        getState,
        subscribe,
        dispatch
    }
}