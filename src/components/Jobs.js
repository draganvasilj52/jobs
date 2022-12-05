import JobItem from './JobItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../features/dataSlice'
const Jobs = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  const { jobs } = useSelector((state) => state.data.jobs)

  return (
    <div className="jobsContainer">
      {jobs?.map((item, index) => (
        <JobItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Jobs
