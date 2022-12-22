import { Link, Outlet, useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'
import ReusableContainer from '../common/ReusableContainer'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import PeopleIcon from '@mui/icons-material/People'
import LinkIcon from '@mui/icons-material/Link'

const Company = () => {
  const navigate = useNavigate()
  let { companyName } = useParams()
  const [selectedItem, setSelectedItem] = useState('about-company')
  const [company, setCompany] = useState({})

  const getCompany = async (companyName) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/company/${companyName}`
      )
      setCompany(response.data.company)
    } catch (error) {
      navigate('*')
    }
  }

  useEffect(() => {
    getCompany(companyName)
  }, [companyName])

  let companyInfoData = [
    {
      name: company[0]?.location,
      icon: (
        <LocationOnIcon
          sx={{
            width: '16px',
            height: '16px',
            color: 'rgb(104, 103, 129)',
          }}
        />
      ),
    },
    {
      name: company[0]?.employees,
      icon: (
        <PeopleIcon
          sx={{
            width: '16px',
            height: '16px',
            color: 'rgb(104, 103, 129)',
          }}
        />
      ),
    },
    {
      name: 'Website',
      icon: (
        <LinkIcon
          sx={{
            width: '16px',
            height: '16px',
            color: 'rgb(104, 103, 129)',
          }}
        />
      ),
    },
  ]

  return (
    <div className="parentDivCompany">
      <ReusableContainer
        companyProps={company[0]}
        jobdetail
        companydetail
        companyInfoData={companyInfoData}
      />
      <div className="parentDivCompany-childDiv">
        <Link
          className={selectedItem === 'about-company' ? 'active' : ''}
          to={``}
          name="about-company"
          onClick={() => setSelectedItem('about-company')}
        >
          About company
        </Link>
        <Link
          className={selectedItem === 'open-positions' ? 'active' : ''}
          to={`open-positions`}
          onClick={() => setSelectedItem('open-positions')}
          name="open-positions"
        >
          Open positions
        </Link>
        <Link
          className={selectedItem === 'experiences' ? 'active' : ''}
          to={`experiences`}
          onClick={() => setSelectedItem('experiences')}
          name="experiences"
        >
          Experiences
        </Link>
        <Link
          className={selectedItem === 'interviews' ? 'active' : ''}
          to={`interviews`}
          onClick={() => setSelectedItem('interviews')}
          name="interviews"
        >
          Interviews
        </Link>
      </div>
      <Outlet context={[company]} />
    </div>
  )
}

export default Company
