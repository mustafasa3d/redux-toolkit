// src/store/counter/reducer.ts
import * as ActionTypes from "./actionTypes"
import { CounterActionTypes } from "./actions"

export interface RootState {
    counter: number
}

// تعريف نوع الـ State
interface CounterState {
    counter: number
}

const initialState: CounterState = {
    counter: 0,
}

// تحديث نوع الـ Reducer
const counterReducer = (state: CounterState = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                counter: state.counter + 1,
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                counter: state.counter - 1,
            }
        case ActionTypes.INCREMENT_BY_AMOUNT:
            return {
                ...state,
                counter: state.counter + action.payload,
            }
        default:
            return state
    }
}

export default counterReducer
