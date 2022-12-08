import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createStore } from 'redux';


// ACTION INCREMENT
const increment = () => {
    return {
        type: 'INCREMENT'
    }
}

// ACTION DECREMENT
const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}

// REDUCER
const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
    }
}

// STORE -> Globalized State
let store = createStore(counter);


// SUBSCRIBE
store.subscribe(() => {
    console.log(store.getState());
});

// DISPATCH
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
