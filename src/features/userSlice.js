import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  loginError: null,
  status: null,
}

export const loginUser = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/auth/signin`,
        data
      )
      return response.data
    } catch (err) {
      return rejectWithValue(err.response.data)
    }
  }
)

export const registerUser = createAsyncThunk('user/register', async (data) => {
  const response = await axios.post(`http://localhost:5000/auth/signup`, data)
  return response.data
})

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser(state) {
      state.user = null
      localStorage.removeItem('user')
    },
    resetError(state) {
      state.loginError = null
    },
  },
  extraReducers(builder) {
    builder.addCase(registerUser.fulfilled, (state, action) => {
      state.user = action.payload
      state.status = 'success'
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
      state.status = 'success'
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.error = 'Invalid Credentials'
      alert(state.error)
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.loginError = action.payload.message
    })
  },
})

export const { logoutUser, resetError } = userSlice.actions

export default userSlice.reducer
