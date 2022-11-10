import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import CompaniesDropdown from './dropdowns/CompaniesDropdown'
import JobsDropdown from './dropdowns/JobsDropdown'

const itemsArray = [
  {
    name: 'Home',
  },
  {
    name: 'Jobs',
    icon: <KeyboardArrowDownIcon sx={{ fontSize: 20, color: 'blue' }} />,
    dropdown: true,
    dropdownElement: <JobsDropdown />,
  },
  {
    name: 'Companies',
    icon: <KeyboardArrowDownIcon sx={{ fontSize: 20, color: 'blue' }} />,
    dropdown: true,
    dropdownElement: <CompaniesDropdown />,
  },
  {
    name: 'Contact',
  },
  {
    name: 'Blog',
  },
  {
    name: 'Meetups',
  },
]

const HeaderMiddleItem = ({ item, index, setHoveredItem, hoveredItem }) => {
  return (
    <div
      onMouseEnter={() => setHoveredItem(item.name)}
      onMouseLeave={() => setHoveredItem('')}
      key={index}
      className={`header_middle_items ${
        hoveredItem === 'Jobs' || hoveredItem === 'Companies'
          ? 'header_middle_relative'
          : ''
      }`}
    >
      <p>{item.name}</p> {item.icon && <span>{item.icon}</span>}
      {item.name === hoveredItem && item.dropdown && (
        <div className="header_middle_items_dropdowns">
          {item.dropdownElement}
        </div>
      )}
    </div>
  )
}

const HeaderMiddle = () => {
  const [hoveredItem, setHoveredItem] = useState('')

  return (
    <div className="header_middle">
      {itemsArray.map((item, index) => (
        <HeaderMiddleItem
          setHoveredItem={setHoveredItem}
          hoveredItem={hoveredItem}
          item={item}
          index={index}
        />
      ))}
    </div>
  )
}

export default HeaderMiddle
