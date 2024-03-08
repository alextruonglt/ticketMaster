import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

const initialState = {
  user: null,
  isError: false,
  isSucces: false,
  isLoading: false,
  message: "",
}
// Register user
export const register = createAsyncThunk(
  "auth/register",
  async (user, thunkApi) => {
    console.log(user)
  }
)
// Login user
export const login = createAsyncThunk("auth/login", async (user, thunkApi) => {
  console.log(user)
})

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {},
})

export default authSlice.reducer
