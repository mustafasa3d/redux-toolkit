// src/store/counter/reducer.ts
import * as ActionTypes from "./actionTypes"
import { CounterActionTypes } from "./actions"

export interface RootState {
    value: number
}

// تعريف نوع الـ State
interface CounterState {
    value: number
}

const initialState: CounterState = {
    value: 0,
}

// تحديث نوع الـ Reducer
const counterReducer = (state: CounterState = initialState, action: CounterActionTypes): CounterState => {
    switch (action.type) {
        case ActionTypes.INCREMENT:
            return {
                ...state,
                value: state.value + 1,
            }
        case ActionTypes.DECREMENT:
            return {
                ...state,
                value: state.value - 1,
            }
        case ActionTypes.INCREMENT_BY_AMOUNT:
            return {
                ...state,
                value: state.value + action.payload,
            }
        default:
            return state
    }
}

export default counterReducer
