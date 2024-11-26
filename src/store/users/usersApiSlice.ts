import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

// جلب الـ Users
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
    const response = await axios.get("/api/users")
    return response.data // افترض أن الاستجابة هي قائمة المستخدمين
})

// الشريحة لتخزين الـ users
const usersSlice = createSlice({
    name: "users",
    initialState: { users: [], status: "idle", error: null },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = "succeeded"
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = "failed"
                state.error = action.error.message
            })
    },
})

export const usersReducer = usersSlice.reducer
