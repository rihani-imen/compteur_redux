import { INCREMENT, DECREMENT } from "../Constants/action-types";
const initialState = { counter: 0 };

function compterReducer(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    
    case INCREMENT:
      return { ...state, counter: state.counter + 1 };
    case DECREMENT:
      return { ...state, counter: state.counter - 1 };

    default:
      return state;
  }
}

export default compterReducer;
