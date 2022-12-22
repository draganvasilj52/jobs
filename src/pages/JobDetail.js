import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'
import ReusableContainer from '../common/ReusableContainer'

const JobDetail = () => {
  let { jobId } = useParams()
  const [job, setJob] = useState({})

  const getJob = async (jobId) => {
    const response = await axios.get(`http://localhost:5000/${jobId}`)
    setJob(response.data.job)
  }

  useEffect(() => {
    getJob(jobId)
  }, [jobId])

  const location = {
    icon: (
      <LocationOnOutlinedIcon
        sx={{ width: '13px', height: '16px', color: 'rgb(104, 103, 129)' }}
      />
    ),
    location: job.location,
    companyName: job.companyName,
    technologies: job.technologies,
  }

  const bottomItems = [
    {
      icon: (
        <BarChartOutlinedIcon
          sx={{ width: '16px', height: '16px', color: 'rgb(104, 103, 129)' }}
        />
      ),
      spanText: 'Experience',
      pText: job.experience?.join(', '),
    },
    {
      icon: (
        <AccessTimeOutlinedIcon
          sx={{ width: '16px', height: '16px', color: 'rgb(104, 103, 129)' }}
        />
      ),
      spanText: 'Working Hours',
      pText: 'Full Time Job',
    },
    {
      icon: (
        <BarChartOutlinedIcon
          sx={{
            width: '16px',
            height: '16px',
            color: 'rgb(104, 103, 129)',
          }}
        />
      ),
      spanText: 'Deadline',
      pText: job.applicationDeadline,
    },
  ]

  return (
    <ReusableContainer
      jobdetail
      jobTitle={job.jobTitle}
      location={location}
      bottomItems={bottomItems}
    />
  )
}

export default JobDetail
