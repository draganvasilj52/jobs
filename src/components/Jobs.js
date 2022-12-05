import JobItem from './JobItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getJobs } from '../features/dataSlice'
import PendingRequest from './PendingRequest'
const Jobs = () => {
  const dispatch = useDispatch()
  const filteredJobs = useSelector((state) => state.data.filteredJobs)
  const { loading } = useSelector((state) => state.data)

  useEffect(() => {
    dispatch(getJobs())
  }, [dispatch])

  return (
    <div className="jobsContainer">
      {!loading ? (
        <PendingRequest />
      ) : (
        filteredJobs?.map((item, index) => <JobItem key={index} item={item} />)
      )}
    </div>
  )
}

export default Jobs
