import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchUsers = createAsyncThunk(
    "users/fetchUsers",
    async () => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!response.ok) {
            throw new Error("some issue");
        }
        return await response.json();
    }
)

const usersSlice = createSlice({
    name: "users",
    initialState: {
        data: [],
        loading: true,
        error: null
    },
    reducers: {},
    extraReducers: (builder) => {

        builder.addCase(fetchUsers.pending, (state) => {
            state.loading = true;
            state.error = null
        }).addCase(fetchUsers.fulfilled, (state, action) => {
            state.data = action.payload;
            state.loading = false
        }).addCase(fetchUsers.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message
        })

    }
});

export default usersSlice.reducer;