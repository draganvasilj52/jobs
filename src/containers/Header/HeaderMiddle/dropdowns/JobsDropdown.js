import LocationOnIcon from '@mui/icons-material/LocationOn'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'
import SchoolIcon from '@mui/icons-material/School'
import DragIndicatorIcon from '@mui/icons-material/DragIndicator'

const jobsItems = [
  {
    name: 'Location',
    icon: <LocationOnIcon />,
    items: [
      'Remote',
      'Sarajevo',
      'Banja Luka',
      'Tuzla',
      'Zenica',
      'Mostar',
      'Doboj',
    ],
  },
  {
    name: 'Position',
    icon: <BusinessCenterIcon />,
    items: [
      'Front-End Developer',
      'Back-End Developer',
      'Full Stack Developer',
      'Design',
      'Quality Assurance',
      'Marketing',
      'Management',
    ],
  },
  {
    name: 'Experience',
    icon: <SchoolIcon />,
    items: ['Junior', 'Medior', 'Senior'],
  },
  {
    name: 'Job type',
    icon: <DragIndicatorIcon />,
    items: ['Full time work', 'Half time work', 'Internship'],
  },
]

const JobsDropdown = () => {
  return jobsItems.map((item, index) => (
    <div key={index} className="dropdown-item-jobs">
      <section className="dropdown-item-jobs-left">{item.icon}</section>
      <section className="dropdown-item-jobs-right">
        <span className="tag">{item.name}</span>
        <div className="elements-div">
          {item.items.map((text, index) => (
            <p key={index} className="items">
              {text}
              <span>, </span>
            </p>
          ))}
        </div>
      </section>
    </div>
  ))
}

export default JobsDropdown
