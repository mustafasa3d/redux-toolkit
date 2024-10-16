// src/store/counter/actions.js
import * as ActionTypes from "./actionTypes"

// تحديد نوع Return للـ Action
export interface IncrementAction {
    type: typeof ActionTypes.INCREMENT
}

export interface DecrementAction {
    type: typeof ActionTypes.DECREMENT
}

export interface IncrementByAmountAction {
    type: typeof ActionTypes.INCREMENT_BY_AMOUNT
    payload: number
}

export type CounterActionTypes = IncrementAction | DecrementAction | IncrementByAmountAction

export const increment = (): IncrementAction => {
    return {
        type: ActionTypes.INCREMENT,
    }
}

export const decrement = (): DecrementAction => {
    return {
        type: ActionTypes.DECREMENT,
    }
}

export const incrementByAmount = (amount: number): IncrementByAmountAction => {
    return {
        type: ActionTypes.INCREMENT_BY_AMOUNT,
        payload: amount,
    }
}
