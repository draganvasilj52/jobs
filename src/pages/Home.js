import Search from '../components/Search'
import Jobs from '../components/Jobs'
import ReusableContainer from '../common/ReusableContainer'
import { useSelector } from 'react-redux'

const Home = () => {
  const filteredJobs = useSelector((state) => state.data.filteredJobs)

  const data = {
    title:
      'The largest database of IT jobs and companies in Bosnia and  Herzegovina',
    description: `Currently active ${filteredJobs?.length} Jobs for developers,
    designers, QA, marketing and management added and refreshed daily.`,
  }

  return (
    <>
      <ReusableContainer
        home
        title={data.title}
        description={data.description}
      />
      <Search />
      <Jobs />
    </>
  )
}

export default Home
