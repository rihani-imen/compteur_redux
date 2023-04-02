
import { useDispatch , useSelector } from "react-redux";

import "./App.css";

import { increment, decrement } from "./redux/Action/action";

function App() {
  const dispatch=useDispatch();
  const incrementb=()=>{
    dispatch(increment());
  }
  const decrementb=()=>{
    dispatch(decrement());
  }
  const counter=useSelector((state)=>state.compterReducer.counter);
  return (
    <div className="App">
      <div>
        <h2>Compteur : {counter}</h2>
        <button
          onClick= {
              incrementb
          }
        >
          +1
        </button>
        <button
          onClick={decrementb}
        >
          -1
        </button>
      </div>
    </div>
  );
}

export default App;