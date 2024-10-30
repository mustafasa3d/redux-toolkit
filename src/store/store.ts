// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import tasksReducer from "./tasks/tasksSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
    },
    devTools: import.meta.env.MODE === "development",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store