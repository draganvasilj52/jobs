import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  jobs: [],
}

export const getJobs = createAsyncThunk('data/jobs', async () => {
  const response = await axios.get('http://localhost:5000')
  return response.data
})

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
    })
  },
})

export const { filterJobs, resetFilter, copyInitialState } = dataSlice.actions

export default dataSlice.reducer
