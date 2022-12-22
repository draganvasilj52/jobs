import { Container, Paper, Typography, Button, Box } from '@mui/material'
import { useOutletContext } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const Experiences = () => {
  const [company] = useOutletContext()
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()

  console.log(company)

  const handlePath = () => {
    if (!user) {
      navigate('/auth')
    } else navigate(`/leave-impression?company=${company[0]?.name}`)
  }

  return (
    <Container
      sx={{
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      component="div"
      maxWidth="md"
    >
      <Paper
        elevation={0}
        sx={{
          backgroundColor: 'rgb(230,246,254)',
          padding: '30px 40px 30px 40px',
        }}
      >
        <Typography sx={{ color: 'rgb(104,103,129)', textAlign: 'center' }}>
          All entered experiences are anonymous, unless you are Đuro...
        </Typography>
        <Typography sx={{ color: 'rgb(104,103,129)', textAlign: 'center' }}>
          The data from the user account is not used nor is it in any form
          accessible to the computer. Your privacy is guaranteed.
        </Typography>
      </Paper>
      <Button
        onClick={handlePath}
        sx={{ marginTop: '30px' }}
        variant="contained"
        color="primary"
      >
        Share Your Experience
      </Button>
      <Typography
        sx={{
          color: 'rgb(104,103,129)',
          textAlign: 'center',
          marginTop: '50px',
        }}
      >
        {company[0]?.name} experience
      </Typography>
      <Container>
        {company[0]?.experiences.map((item, index) => (
          <Box key={index} sx={{ border: '2px solid gray', padding: '20px' }}>
            <Typography sx={{ textAlign: 'center' }}>
              Username: {item.username}
            </Typography>
            <Typography>{item.experience}</Typography>
          </Box>
        ))}
      </Container>
    </Container>
  )
}

export default Experiences
