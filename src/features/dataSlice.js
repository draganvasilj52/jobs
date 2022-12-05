import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
const initialState = {
  jobs: [],
  filteredJobs: [],
}

export const getJobs = createAsyncThunk('data/jobs', async () => {
  const response = await axios.get('http://localhost:5000')
  return response.data.jobs
})

export const getJobsBySearchTerm = createAsyncThunk(
  'data/getJobsBySearchTerm',
  async (data) => {
    const response = await axios.get(
      `http://localhost:5000/search?location=${data.location}&technologies=${data.technologies}&experience=${data.experience}`
    )

    return response.data.jobs
  }
)

const dataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getJobs.fulfilled, (state, action) => {
      state.jobs = action.payload
      state.filteredJobs = action.payload
    })
    builder.addCase(getJobsBySearchTerm.fulfilled, (state, action) => {
      state.filteredJobs = action.payload
    })
  },
})

//export const {} = dataSlice.actions

export default dataSlice.reducer
