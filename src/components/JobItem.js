import LocationOnIcon from '@mui/icons-material/LocationOn'
import BarChartIcon from '@mui/icons-material/BarChart'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import JobItemRightSection from '../common/JobItemRightSection'
import { useNavigate } from 'react-router-dom'
const JobItem = ({ item }) => {
  const itemRightSectionData = [
    {
      spanText: 'Location',
      title: item.location.join(', '),
      icon: <LocationOnIcon sx={{ fontSize: 14, color: 'gray' }} />,
    },
    {
      spanText: 'Experience',
      title: item.experience.join(', '),
      icon: <BarChartIcon sx={{ fontSize: 14, color: 'gray' }} />,
    },
    {
      spanText: 'Application Deadline',
      title: item.applicationDeadline,
      icon: <AccessTimeIcon sx={{ fontSize: 14, color: 'gray' }} />,
    },
  ]
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/job/${item._id}`)}
      className="jobsContainer_item"
    >
      <div className="jobsContainer_item_left">
        <h3>{item.jobTitle}</h3>
        <p>{item.companyName}</p>
      </div>
      <div className="jobsContainer_item_right">
        {itemRightSectionData.map((item, index) => (
          <JobItemRightSection key={index} item={item} />
        ))}
      </div>
    </div>
  )
}

export default JobItem
