import { Check, Pencil, Plus, Trash2 } from "lucide-react"
import React, { useState } from "react"
import { addTask, removeTask, updateTask } from "../../store/tasks/tasksSlice"
import { useDispatch, useSelector } from "react-redux"

import { RootState } from "../../store/store"
import { useGetTasksQuery } from "../../store/tasks/tasksApiSlice"

const TaskManager: React.FC = () => {
    const { data: tasksData = [], isLoading, isFetching, isError } = useGetTasksQuery("completed") // جلب المهام

    console.log("tasksData", tasksData)

    const [task, setTask] = useState<string>("")
    const [editId, setEditId] = useState<number | null>(null)
    const [editTask, setEditTask] = useState<string>("")

    const tasks = useSelector((state: RootState) => state.tasks.tasks)
    const dispatch = useDispatch()

    console.log("tasks", tasks)

    const handleAddTask = () => {
        if (task.trim()) {
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
        if (editId !== null && editTask.trim()) {
            dispatch(updateTask({ id: editId, updatedTask: editTask }))
            setEditId(null)
            setEditTask("")
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            if (editId !== null) {
                handleUpdateTask()
            } else {
                handleAddTask()
            }
        }
    }

    if (isLoading || isFetching) {
        return <p>Loading tasks...</p>
    }

    if (isError) {
        return <p>Error fetching tasks. Please try again.</p>
    }

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Task Manager</h2>

            {/* Add Task Form */}
            <div className="flex gap-2 mb-6">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Add new task"
                    className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleAddTask}
                    className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
                >
                    <Plus size={20} />
                    Add Task
                </button>
            </div>

            {/* Tasks List */}
            <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-700">api Tasks</h3>
                <ul className="space-y-3">
                    {tasksData.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center gap-2 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            {editId === task.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={handleUpdateTask}
                                        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                    >
                                        <Check size={20} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className="flex-1">{task.title}</span>
                                    <button
                                        onClick={() => handleEditTask(task.id)}
                                        className="p-2 text-blue-500 hover:bg-blue-100 rounded-md transition-colors"
                                    >
                                        <Pencil size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleRemoveTask(task.id)}
                                        className="p-2 text-red-500 hover:bg-red-100 rounded-md transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                {tasksData.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No tasks yet. Add your first task!</p>
                )}
                <h3 className="text-xl font-semibold mb-4 text-gray-700">local Tasks</h3>
                <ul className="space-y-3">
                    {tasks.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center gap-2 p-3 bg-gray-50 rounded-md hover:bg-gray-100 transition-colors"
                        >
                            {editId === task.id ? (
                                <>
                                    <input
                                        type="text"
                                        value={editTask}
                                        onChange={(e) => setEditTask(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        className="flex-1 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    />
                                    <button
                                        onClick={handleUpdateTask}
                                        className="p-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                                    >
                                        <Check size={20} />
                                    </button>
                                </>
                            ) : (
                                <>
                                    <span className="flex-1">{task.task}</span>
                                    <button
                                        onClick={() => handleEditTask(task.id)}
                                        className="p-2 text-blue-500 hover:bg-blue-100 rounded-md transition-colors"
                                    >
                                        <Pencil size={20} />
                                    </button>
                                    <button
                                        onClick={() => handleRemoveTask(task.id)}
                                        className="p-2 text-red-500 hover:bg-red-100 rounded-md transition-colors"
                                    >
                                        <Trash2 size={20} />
                                    </button>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
                {tasks.length === 0 && (
                    <p className="text-center text-gray-500 mt-4">No tasks yet. Add your first task!</p>
                )}
            </div>
        </div>
    )
}

export default TaskManager

// // src/components/tasks/TaskManager.tsx

// import React, { useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addTask, removeTask, updateTask } from "../../store/tasks/actions"
// import { RootState } from "../../store/store"

// const TaskManager: React.FC = () => {
//     const [task, setTask] = useState<string>("")
//     const [editId, setEditId] = useState<number | null>(null)
//     const [editTask, setEditTask] = useState<string>("")

//     const tasks = useSelector((state: RootState) => state.tasks.tasks)
//     const dispatch = useDispatch()

//     console.log("tasks", tasks)
//     const handleAddTask = () => {
//         if (task) {
//             dispatch(addTask(task))
//             setTask("")
//         }
//     }

//     const handleRemoveTask = (id: number) => {
//         dispatch(removeTask(id))
//     }

//     const handleEditTask = (id: number) => {
//         setEditId(id)
//         const currentTask = tasks.find((t) => t.id === id)
//         if (currentTask) {
//             setEditTask(currentTask.task)
//         }
//     }

//     const handleUpdateTask = () => {
//         if (editId !== null && editTask) {
//             dispatch(updateTask(editId, editTask))
//             setEditId(null)
//             setEditTask("")
//         }
//     }

//     return (
//         <div>
//             <h2>Task Manager</h2>
//             <div>
//                 <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add new task" />
//                 <button onClick={handleAddTask}>Add Task</button>
//             </div>
//             <div>
//                 <h3>Tasks</h3>
//                 <ul>
//                     {tasks.map((task) => (
//                         <li key={task.id}>
//                             {editId === task.id ? (
//                                 <>
//                                     <input type="text" value={editTask} onChange={(e) => setEditTask(e.target.value)} />
//                                     <button onClick={handleUpdateTask}>Update</button>
//                                 </>
//                             ) : (
//                                 <>
//                                     {task.task}
//                                     <button onClick={() => handleEditTask(task.id)}>Edit</button>
//                                     <button onClick={() => handleRemoveTask(task.id)}>Remove</button>
//                                 </>
//                             )}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     )
// }

// export default TaskManager
