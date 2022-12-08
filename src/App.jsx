import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, set, signIn, signOut } from './actions/index.js';

function App() {
    const counter  = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <h1>Counter: { counter }</h1>
                <button onClick={() => dispatch(set(0))}>0</button>
                <button onClick={() => dispatch(decrement())}>DECREMENT</button>
                <button onClick={() => dispatch(increment())}>INCREMENT</button>
                <button onClick={() => dispatch(set(100))}>100</button>
            </div>
            <div>
                <h2>{ isLogged && <span>Valuable information I shouldn't see if I'm not signed in.</span>}</h2>
                <button onClick={() => { if(isLogged) dispatch(signOut()); else dispatch(signIn()); }}>
                    { isLogged && <span>Sign Out</span> }
                    { !isLogged && <span>Sign In</span> }
                </button>
            </div>

        </div>
    )
}

export default App
