// src/store/rootReducer.ts
import { combineReducers } from "redux"
import counterReducer from "./counter/reducer"
import taskReducer from "./tasks/reducer"

// دمج الـ reducers في rootReducer
const rootReducer = combineReducers({
    counter: counterReducer,
    tasks: taskReducer,
})

// تعريف نوع الـ state للـ Root
export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
