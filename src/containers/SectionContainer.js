import { useSelector } from 'react-redux'

const SectionContainer = () => {
  const filteredJobs = useSelector((state) => state.data.filteredJobs)

  return (
    <section className="infoSection">
      <div className="infoSection_mainContainer">
        <h1>
          The largest database of IT jobs and companies in Bosnia and
          Herzegovina
        </h1>
        <p>
          Currently active {filteredJobs?.length} Jobs for developers,
          designers, QA, marketing and management added and refreshed daily.
        </p>
      </div>
    </section>
  )
}

export default SectionContainer
