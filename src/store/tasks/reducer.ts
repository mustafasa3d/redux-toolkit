// src/store/tasks/reducer.ts

// src/store/tasks/reducer.ts
import * as ActionTypes from "./actionTypes"
import { TaskActionTypes } from "./actions"

export interface Task {
    id: number
    task: string
}

export interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: [],
}

const taskReducer = (state: TaskState = initialState, action: TaskActionTypes): TaskState => {
    switch (action.type) {
        case ActionTypes.ADD_TASK: {
            const newTask: Task = {
                id: state.tasks.length + 1,
                task: action.payload,
            }
            return {
                ...state,
                tasks: [...state.tasks, newTask],
            }
        }
        case ActionTypes.REMOVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter((task) => task.id !== action.payload),
            }
        }
        case ActionTypes.UPDATE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map((task) =>
                    task.id === action.payload.id ? { ...task, task: action.payload.updatedTask } : task
                ),
            }
        }
        default:
            return state
    }
}

export default taskReducer

// import * as ActionTypes from "./actionTypes"
// import { TaskActionTypes } from "./actions"

// // تعريف نوع الـ State
// export interface Task {
//     id: number
//     task: string
// }

// export interface TaskState {
//     tasks: Task[]
// }

// const initialState: TaskState = {
//     tasks: [], // بداية بدون مهام
// }

// const taskReducer = (state: TaskState = initialState, action: TaskActionTypes): TaskState => {
//     switch (action.type) {
//         case ActionTypes.ADD_TASK: {
//             const newTask: Task = {
//                 id: state.tasks.length + 1, // بسيطًا، إضافة معرف للمهمة
//                 task: action.payload,
//             }
//             return {
//                 ...state,
//                 tasks: [...state.tasks, newTask],
//             }
//         }
//         case ActionTypes.REMOVE_TASK: {
//             return {
//                 ...state,
//                 tasks: state.tasks.filter((task) => task.id !== action.payload),
//             }
//         }
//         case ActionTypes.UPDATE_TASK: {
//             return {
//                 ...state,
//                 tasks: state.tasks.map((task) =>
//                     task.id === action.payload.id ? { ...task, task: action.payload.updatedTask } : task
//                 ),
//             }
//         }
//         default:
//             return state
//     }
// }

// export default taskReducer
