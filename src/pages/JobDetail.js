import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined'
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined'
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined'

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

  const bottomItems = [
    {
      icon: <BarChartOutlinedIcon sx={{ width: '13px', height: '16px' }} />,
      spanText: 'Experience',
      pText: job.experience?.join(', '),
    },
    {
      icon: <AccessTimeOutlinedIcon sx={{ width: '13px', height: '16px' }} />,
      spanText: 'Working Hours',
      pText: 'Full Time Job',
    },
    {
      icon: <BarChartOutlinedIcon sx={{ width: '13px', height: '16px' }} />,
      spanText: 'Deadline',
      pText: job.applicationDeadline,
    },
  ]

  return (
    <div className="jobParent">
      <div className="jobParent_top">
        <h2>{job.companyName}</h2>
        <div className="jobParent_top_div">
          <LocationOnOutlinedIcon sx={{ width: '14px', height: '16px' }} />
          <p>{job.location?.join(', ')}</p>
        </div>
        <span>{job.technologies?.join(', ')}</span>
      </div>

      <div className="jobParent_bottom">
        {bottomItems.map((item, index) => (
          <div key={index} className="jobParent_bottom_item">
            <div className="jobParent_bottom_item_top">
              {item.icon}
              <span>{item.spanText}</span>
            </div>
            <p>{item.pText}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default JobDetail
