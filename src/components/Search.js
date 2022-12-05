import Input from '../common/Input'
import { getJobs, getJobsBySearchTerm } from '../features/dataSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
const searchItems = [
  {
    text: 'Location',
    dropdownOptions: ['Mostar', 'Zenica', 'Sarajevo'],
    name: 'location',
  },
  {
    text: 'Experience',
    dropdownOptions: ['Junior', 'Medior', 'Senior'],
    name: 'experience',
  },
  {
    text: 'Key word, such as React',
    dropdownOptions: ['React', 'Node'],
    name: 'technologies',
  },
]

const Search = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  let errors = {
    location: [],
    experience: [],
    technologies: [],
  }

  const handleClick = () => {
    for (let key of Object.keys(errors)) {
      errors[key] = []

      let input = document.querySelector(`div[name="${key}"]`)
      let selectedArray = input.querySelectorAll('.inputDiv_left_selected')

      if (selectedArray.length > 0) {
        selectedArray.forEach((el) => {
          let value = el.firstChild.innerText
          errors[key].push(value)
        })
      }
    }

    const location = errors['location'].toString()
    const technologies = errors['technologies'].toString()
    const experience = errors['experience'].toString()

    const searchData = {
      location,
      technologies,
      experience,
    }

    if (
      errors['location'].length === 0 &&
      errors['experience'].length === 0 &&
      errors['technologies'].length === 0
    ) {
      dispatch(getJobs())
      navigate('/')
    } else {
      dispatch(getJobsBySearchTerm(searchData))
      navigate(
        `/?location=${searchData.location}&technologies=${searchData.technologies}&experience=${searchData.experience}`
      )
    }
  }

  return (
    <div className="searchDiv">
      {searchItems.map((item, index) => (
        <Input key={index} item={item} />
      ))}
      <button onClick={handleClick}>Search</button>
    </div>
  )
}

/* const location = useLocation()
const query = useQuery()
const page = query.get('page') || 1
const searchQuery = query.get('searchQuery')
const [search, setSearch] = useState('')
const [tags, setTags] = useState([])

const handleKeyPress = (e) => {
  if (e.keyCode === 13) {
    searchPost()
  }
}

const handleAddChip = (tag) => setTags([...tags, tag])

const handleDeleteChip = (chipToDelete) =>
  setTags(tags.filter((tag) => tag !== chipToDelete))

const searchPost = () => {
  if (search.trim() || tags) {
    dispatch(getPostsBySearch({ search, tags: tags.join(',') }))
    history.push(
      `/posts/search?searchQuery=${search || 'none'}&tags=${tags.join(',')}`
    )
  } else {
    history.push('/')
  }
} */

export default Search
