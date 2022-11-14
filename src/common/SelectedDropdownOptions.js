import CloseIcon from '@mui/icons-material/Close'

const SelectedDropdownOptions = ({ item, name, elements, setElements }) => {
  const removeItem = (item, e) => {
    e.stopPropagation()
    setElements(elements.filter((x) => x !== item))
  }

  return (
    <div
      name={name}
      className="inputDiv_left_selected"
      onClick={(e) => removeItem(item, e)}
    >
      <p>{item}</p>
      <CloseIcon />
    </div>
  )
}

export default SelectedDropdownOptions
