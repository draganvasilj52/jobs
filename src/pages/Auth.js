import { Paper, Container, Typography, Button, Grid } from '@mui/material'
import AuthInput from '../components/AuthInput'
import { useState } from 'react'
import { registerUser, loginUser, resetError } from '../features/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginError = useSelector((state) => state.user.loginError)
  const [isSignUp, setIsSignUp] = useState(false)

  const [userData, setUserData] = useState({
    username: '',
    email: '',
    password: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isSignUp) {
      dispatch(registerUser(userData))
    } else {
      let data = {
        email: userData.email,
        password: userData.password,
      }

      dispatch(loginUser(data))
        .unwrap()
        .then(() => {
          navigate('/')
        })
    }
  }
  const handleChange = (e) => {
    if (e.target.value !== '') {
      dispatch(resetError())
    }
    setUserData({ ...userData, [e.target.name]: e.target.value })
  }

  const switchMode = () => {
    setIsSignUp((prev) => !prev)
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: '26px',
          padding: '16px',
        }}
        elevation={3}
      >
        <Typography component="h1" variant="h5">
          {isSignUp ? 'Sign Up' : 'Login'}
        </Typography>
        <form
          onSubmit={handleSubmit}
          style={{ marginTop: '20px', width: '100%' }}
        >
          <Grid container spacing={2}>
            {isSignUp && (
              <AuthInput
                handleChange={handleChange}
                name="username"
                type="text"
                label="Username"
              />
            )}
            <AuthInput
              handleChange={handleChange}
              type="email"
              name="email"
              label="Email Address"
            />

            <AuthInput
              handleChange={handleChange}
              name="password"
              type="password"
              label="Password"
            />
          </Grid>
          {!isSignUp && (
            <Typography
              sx={{ color: 'red', textAlign: 'center', padding: '10px' }}
            >
              {loginError}
            </Typography>
          )}
          <Button
            sx={{ margin: '10px 0px' }}
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
          >
            {isSignUp ? 'Sign Up' : 'Login'}
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button onClick={switchMode}>
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign Up"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  )
}

export default Auth
