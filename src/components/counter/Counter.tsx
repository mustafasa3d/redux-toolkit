// src/components/counter/Counter.tsx
import React, { useState } from "react"

import { incrementByAmount } from "../../store/counter/actions"
import { RootState } from "../../store/counter/reducer"
import { AppDispatch } from "../../store/store"
import { useDispatch, useSelector } from "react-redux"

const Counter: React.FC = () => {
    const [amount, setAmount] = useState<number>(0)
    const counter = useSelector((state: RootState) => state.counter.counter)
    const dispatch: AppDispatch = useDispatch()

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(amount))
    }

    console.log("count", counter)

    return (
        <div>
            <p>Count: {counter}</p>
            <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount" />
            <button onClick={handleIncrementByAmount}>Increment by {amount}</button>
        </div>
    )
}

export default Counter
