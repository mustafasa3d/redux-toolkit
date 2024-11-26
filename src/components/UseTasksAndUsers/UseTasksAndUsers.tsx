// @ts-nocheck
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchTasks } from "../../store/tasks/tasksApiSlice"
import { fetchUsers } from "../../store/users/usersApiSlice"
import { useGetTasksQuery, useGetUsersQuery } from "../../store/apislice/apiSlice"

const UseTasksAndUsers = () => {
    const dispatch = useDispatch()
    const { tasks, status: tasksStatus } = useSelector((state) => state.tasks)
    const { users, status: usersStatus } = useSelector((state) => state.users)

    // باستخدام createAsyncThunk
    useEffect(() => {
        if (tasksStatus === "idle") dispatch(fetchTasks())
        if (usersStatus === "idle") dispatch(fetchUsers())
    }, [dispatch, tasksStatus, usersStatus])

    // باستخدام RTK Query
    const { data: tasksData, isLoading: tasksLoading } = useGetTasksQuery()
    const { data: usersData, isLoading: usersLoading } = useGetUsersQuery()

    return (
        <div>
            <h1>Tasks and Users</h1>
            <h2>Tasks (via RTK Query):</h2>
            {tasksLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {tasksData?.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}

            <h2>Users (via RTK Query):</h2>
            {usersLoading ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {usersData?.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}

            <h2>Tasks (via AsyncThunk):</h2>
            {tasksStatus === "loading" ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {tasks.map((task) => (
                        <li key={task.id}>{task.title}</li>
                    ))}
                </ul>
            )}

            <h2>Users (via AsyncThunk):</h2>
            {usersStatus === "loading" ? (
                <p>Loading...</p>
            ) : (
                <ul>
                    {users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default UseTasksAndUsers
