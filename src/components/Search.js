import Input from '../common/Input'

const searchItems = [
  {
    text: 'Location',
    dropdownOptions: ['Mostar', 'Zenica', 'Doboj'],
    name: 'location',
  },
  {
    text: 'Experience',
    dropdownOptions: ['Junior', 'Medior', 'Senior'],
    name: 'experience',
  },
  {
    text: 'Key word, such as React',
    dropdownOptions: ['React', 'Node', 'Angular'],
    name: 'technologies',
  },
]

const Search = () => {
  const handleClick = () => {}

  return (
    <div className="searchDiv">
      {searchItems.map((item, index) => (
        <Input key={index} item={item} />
      ))}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Search
