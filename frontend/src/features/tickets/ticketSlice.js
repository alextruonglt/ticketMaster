import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import ticketService from "./ticketService"

const inititalState = {
  tickets: [],
  ticket: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
}

export const ticketSlice = createSlice({
  name: "ticket",
  inititalState,
  reducers: {
    reset: (state) => inititalState,
  },
  extraReducers: (builder) => {},
})

export const { reset } = ticketSlice.actions
export default ticketSlice.reducer
