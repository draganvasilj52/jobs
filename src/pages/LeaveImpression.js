import { useSearchParams, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
const LeaveImpression = () => {
  const { user } = useSelector((state) => state.user)
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  let companyName = searchParams.get('company')
  const [experience, setExperience] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    await axios.put(
      `http://localhost:5000/company/${companyName}`,
      { experience },
      {
        headers: {
          authorization: `Bearer ${user?.token}`,
        },
      }
    )

    navigate(`/company/${companyName}/experiences`)
  }

  return (
    <div>
      LeaveImpression
      <input type="text" onChange={(e) => setExperience(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default LeaveImpression
