import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { useRef } from 'react'
import onOutsideClickHook from '../common/OutsideClickHook'
import SelectedDropdownOptions from './SelectedDropdownOptions'

const Input = ({ item }) => {
  const [openD, setOpenD] = useState(false)
  const [elements, setElements] = useState([])

  const ref = useRef()
  onOutsideClickHook(
    ref,
    openD
      ? () => {
          setOpenD(false)
        }
      : () => {}
  )

  let displayDropdownOptions = [...item.dropdownOptions]

  let singleItem = elements.map((item) => item)
  let options = displayDropdownOptions.filter((el) => !singleItem.includes(el))

  const handleClick = (tit) => {
    setElements((prev) => [...prev, tit])
  }

  return (
    <div
      ref={ref}
      onClick={() => setOpenD((prev) => !prev)}
      className="inputDiv"
    >
      <div name={item.name} className="inputDiv_left">
        {elements.length > 0
          ? elements?.map((item) => (
              <SelectedDropdownOptions
                item={item}
                elements={elements}
                setElements={setElements}
              />
            ))
          : item.text}
      </div>
      <span></span>
      <div className="inputDiv_right">
        <KeyboardArrowDownIcon sx={{ fontSize: 20, color: 'blue' }} />
      </div>
      {openD && (
        <div className="inputDiv_dropdown">
          {options.map((opt, index) => (
            <p key={index} onClick={() => handleClick(opt, item.name)}>
              {opt}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Input
