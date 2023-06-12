import { createStore } from 'redux';

// store

const store = createStore(reducer);

// reducer
function reducer(state = { amount: 1, blance: 9000 }, action) {
    if (action.type === "increment") {
        return { amount: state.amount + 1, blance: state.blance - 100 }
    }

    if (action.type === 'dicrement') return { amount: state.amount - 1 }
    return state
}
// globale state  
console.log(store.getState());

store.dispatch({ type: "increment" })
store.dispatch({ type: "increment" })
store.dispatch({ type: "increment" })
store.dispatch({ type: "increment" })
console.log(store.getState());

store.dispatch({ type: "dicrement" })

console.log(store.getState());
