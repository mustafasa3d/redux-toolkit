import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../store/store"
import { incrementByAmount } from "../../store/counter/counterSlice"

const Counter: React.FC = () => {
    const [amount, setAmount] = useState<number>(0)
    // استخدام useSelector للوصول إلى state
    const counter = useSelector((state: RootState) => state.counter.counter)
    const dispatch = useDispatch()

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmount(Number(e.target.value))
    }

    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(amount))
    }

    console.log("count", counter)

    return (
        <div className="p-4">
            <p className="text-xl mb-4">Count: {counter}</p>
            <div className="flex gap-2">
                <input 
                    type="number" 
                    value={amount} 
                    onChange={handleAmountChange} 
                    placeholder="Enter amount" 
                    className="border p-2 rounded"
                />
                <button 
                    onClick={handleIncrementByAmount}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Increment by {amount}
                </button>
            </div>
        </div>
    )
}

export default Counter

// // src/components/counter/Counter.tsx
// import React, { useState } from "react"

// import { incrementByAmount } from "../../store/counter/actions"
// import { RootState } from "../../store/counter/reducer"
// import { AppDispatch } from "../../store/store"
// import { useDispatch, useSelector } from "react-redux"

// const Counter: React.FC = () => {
//     const [amount, setAmount] = useState<number>(0)
//     const counter = useSelector((state: RootState) => state.counter.counter)
//     const dispatch: AppDispatch = useDispatch()

//     const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setAmount(Number(e.target.value))
//     }

//     const handleIncrementByAmount = () => {
//         dispatch(incrementByAmount(amount))
//     }

//     console.log("count", counter)

//     return (
//         <div>
//             <p>Count: {counter}</p>
//             <input type="number" value={amount} onChange={handleAmountChange} placeholder="Enter amount" />
//             <button onClick={handleIncrementByAmount}>Increment by {amount}</button>
//         </div>
//     )
// }

// export default Counter
