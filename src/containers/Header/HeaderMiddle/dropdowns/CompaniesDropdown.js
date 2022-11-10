import ApartmentIcon from '@mui/icons-material/Apartment'
import CreateIcon from '@mui/icons-material/Create'

const companiesItems = [
  {
    name: 'Search compaines',
    icon: <ApartmentIcon sx={{ fontSize: 24, color: 'blue' }} />,
  },
  {
    name: 'Share your work experience',
    icon: <CreateIcon sx={{ fontSize: 24, color: 'blue' }} />,
  },
  {
    name: 'Share your interview experience',
    icon: <CreateIcon sx={{ fontSize: 24, color: 'blue' }} />,
  },
  {
    name: 'Look at the reviews',
    icon: <CreateIcon sx={{ fontSize: 24, color: 'blue' }} />,
  },
]

const CompaniesDropdown = () => {
  return companiesItems.map((item, index) => (
    <div key={index} className="dropdown-item-companies">
      {item.icon} <span className="companies">{item.name}</span>
    </div>
  ))
}

export default CompaniesDropdown
