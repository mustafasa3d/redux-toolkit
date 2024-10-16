// src/components/tasks/TaskManager.tsx

import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addTask, removeTask, updateTask } from "../../store/tasks/actions"
import { RootState } from "../../store/store"

const TaskManager: React.FC = () => {
    const [task, setTask] = useState<string>("")
    const [editId, setEditId] = useState<number | null>(null)
    const [editTask, setEditTask] = useState<string>("")

    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const dispatch = useDispatch()

    console.log("tasks", tasks)
    const handleAddTask = () => {
        if (task) {
            dispatch(addTask(task))
            setTask("")
        }
    }

    const handleRemoveTask = (id: number) => {
        dispatch(removeTask(id))
    }

    const handleEditTask = (id: number) => {
        setEditId(id)
        const currentTask = tasks.find((t) => t.id === id)
        if (currentTask) {
            setEditTask(currentTask.task)
        }
    }

    const handleUpdateTask = () => {
        if (editId !== null && editTask) {
            dispatch(updateTask(editId, editTask))
            setEditId(null)
            setEditTask("")
        }
    }

    return (
        <div>
            <h2>Task Manager</h2>
            <div>
                <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task" />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <div>
                <h3>Tasks</h3>
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>
                            {editId === task.id ? (
                                <>
                                    <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
                                    <button onClick={handleUpdateTask}>Update</button>
                                </>
                            ) : (
                                <>
                                    {task.task}
                                    <button onClick={() => handleEditTask(task.id)}>Edit</button>
                                    <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default TaskManager
