import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com/" }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => "posts",
        }),
        getUsers: builder.query({
            query: () => "users",
        }),
    }),
})

// تصدير الـ hooks الخاصة بـ RTK Query
export const { useGetTasksQuery, useGetUsersQuery } = apiSlice
