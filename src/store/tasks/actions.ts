// src/store/tasks/actions.js

import * as ActionTypes from "./actionTypes"

// تعريف أنواع الأكشنات
export interface AddTaskAction {
    type: typeof ActionTypes.ADD_TASK
    payload: string // افتراضًا أن المهمة هي نص
}

export interface RemoveTaskAction {
    type: typeof ActionTypes.REMOVE_TASK
    payload: number // افتراضًا أن المهمة تحتوي على معرف فريد
}

export interface UpdateTaskAction {
    type: typeof ActionTypes.UPDATE_TASK
    payload: { id: number; updatedTask: string } // معرف المهمة والتحديث الجديد
}

export type TaskActionTypes = AddTaskAction | RemoveTaskAction | UpdateTaskAction

// الأكشنات
export const addTask = (task: string): AddTaskAction => {
    return {
        type: ActionTypes.ADD_TASK,
        payload: task,
    }
}

export const removeTask = (id: number): RemoveTaskAction => {
    return {
        type: ActionTypes.REMOVE_TASK,
        payload: id,
    }
}

export const updateTask = (id: number, updatedTask: string): UpdateTaskAction => {
    return {
        type: ActionTypes.UPDATE_TASK,
        payload: { id, updatedTask },
    }
}
