import { INCREMENT, DECREMENT } from "../Constants/action-types";

export const increment=(payload)=>({
    type:INCREMENT,
    payload ,

}) 

export const decrement=(payload)=>({
    type: DECREMENT,
    payload,
})