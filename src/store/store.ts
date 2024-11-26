// src/store/store.ts

import { configureStore } from "@reduxjs/toolkit"
import counterReducer from "./counter/counterSlice"
import tasksReducer from "./tasks/tasksSlice"
import { tasksApi } from "./tasks/tasksApiSlice"

const store = configureStore({
    reducer: {
        counter: counterReducer,
        tasks: tasksReducer,
        [tasksApi.reducerPath]: tasksApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(tasksApi.middleware),
    devTools: import.meta.env.MODE === "development",
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
