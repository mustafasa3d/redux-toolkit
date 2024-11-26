import { useGetTasksQuery, useGetUsersQuery } from "./apislice/apiSlice"
// import { useGetTasksQuery, useGetUsersQuery } from "./features/api/apiSlice"

const Test = () => {
    const { data: tasks, isLoading: tasksLoading, error: tasksError } = useGetTasksQuery()
    const { data: users, isLoading: usersLoading, error: usersError } = useGetUsersQuery()

    if (tasksLoading || usersLoading) return <p>Loading...</p>
    if (tasksError || usersError) return <p>Error loading data!</p>

    return (
        <div>
            <h1>Tasks:</h1>
            <ul>
                {tasks?.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
            <h1>Users:</h1>
            <ul>
                {users?.map((user) => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Test
