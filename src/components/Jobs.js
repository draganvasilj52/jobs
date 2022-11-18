import JobItem from './JobItem'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { copyInitialState } from '../features/dataSlice'

const Jobs = () => {
  const jobs = useSelector((state) => state.data.filteredArray)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(copyInitialState())
  }, [dispatch])

  return (
    <div className="jobsContainer">
      {jobs.map((item, index) => (
        <JobItem key={index} item={item} />
      ))}
    </div>
  )
}

export default Jobs
