import { TextField, Grid } from '@mui/material'

const AuthInput = ({ name, type, label, handleChange }) => {
  return (
    <Grid item xs={12} sm={12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        type={type}
        required
        fullWidth
        variant="outlined"
        autoFocus
      />
    </Grid>
  )
}

export default AuthInput
