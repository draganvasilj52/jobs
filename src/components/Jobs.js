import JobItem from './JobItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../features/dataSlice'
const Jobs = () => {
  const dispatch = useDispatch()
  const filteredJobs = useSelector((state) => state.data.filteredJobs)

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  return (
    <div className="jobsContainer">
      {filteredJobs?.map((item, index) => (
        <JobItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Jobs
