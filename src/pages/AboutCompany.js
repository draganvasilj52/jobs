import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Container, Typography } from '@mui/material'

const AboutCompany = () => {
  const [company] = useOutletContext()

  return (
    <Container sx={{ margin: '30px 16px 16px 0px' }} maxWidth="xl">
      <Typography>{company[0]?.aboutCompany}</Typography>
    </Container>
  )
}

export default AboutCompany
