// src/store/tasks/tasksSlice.ts

import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface Task {
    id: number
    task: string
}

interface TaskState {
    tasks: Task[]
}

const initialState: TaskState = {
    tasks: [],
}

const tasksSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        addTask: (state, action: PayloadAction<string>) => {
            const newTask: Task = {
                id: state.tasks.length + 1,
                task: action.payload,
            }
            state.tasks.push(newTask)
        },
        removeTask: (state, action: PayloadAction<number>) => {
            state.tasks = state.tasks.filter((task) => task.id !== action.payload)
        },
        updateTask: (state, action: PayloadAction<{ id: number; updatedTask: string }>) => {
            const taskToUpdate = state.tasks.find((task) => task.id === action.payload.id)
            if (taskToUpdate) {
                taskToUpdate.task = action.payload.updatedTask
            }
        },
    },
})

export const { addTask, removeTask, updateTask } = tasksSlice.actions
export default tasksSlice.reducer
