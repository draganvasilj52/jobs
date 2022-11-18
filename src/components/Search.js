import Input from '../common/Input'
import { filterJobs, resetFilter } from '../features/dataSlice'
import { useDispatch } from 'react-redux'

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

    if (
      errors['location'].length === 0 &&
      errors['experience'].length === 0 &&
      errors['technologies'].length === 0
    ) {
      dispatch(resetFilter())
    } else {
      dispatch(filterJobs(errors))
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

export default Search
