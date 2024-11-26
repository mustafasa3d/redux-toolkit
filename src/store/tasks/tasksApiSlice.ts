// src/store/tasks/tasksApiSlice.ts

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const tasksApi = createApi({
    reducerPath: "tasksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com", // استبدل بـ API base URL الخاص بك
    }),
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: (x) => {
                console.log("x", x)
                return "/posts"
            }, // endpoint لجلب المهام
            keepUnusedDataFor: 60 * 2,
        }),
    }),
})

export const { useGetTasksQuery } = tasksApi
