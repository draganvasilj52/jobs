import { useOutletContext } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import JobItem from '../components/JobItem'
const OpenPositions = () => {
  const [company] = useOutletContext()

  const companyId = company[0]?._id

  const [selectedJobs, setSelectedJobs] = useState([])

  const getJobs = async (companyId) => {
    const response = await axios.get(
      `http://localhost:5000/getjobs/${companyId}`
    )
    setSelectedJobs(response.data.jobs)
  }

  useEffect(() => {
    getJobs(companyId)
  }, [companyId])

  return (
    <div className="jobsContainer">
      {selectedJobs?.map((item, index) => (
        <JobItem key={index} item={item} />
      ))}
    </div>
  )
}

export default OpenPositions
