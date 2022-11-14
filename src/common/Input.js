import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { useState } from 'react'
import { useRef } from 'react'
import onOutsideClickHook from '../common/OutsideClickHook'

import SelectedDropdownOptions from './SelectedDropdownOptions'

const Input = ({ item }) => {
  const [openD, setOpenD] = useState(false)
  const [elements, setElements] = useState([])

  let inputRefs = useRef({})

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
  let kita = displayDropdownOptions.filter((el) => !singleItem.includes(el))

  const handleClickA = (tit) => {
    setElements((prev) => [...prev, tit])
  }

  return (
    <div
      name={item.name}
      ref={ref}
      onClick={() => setOpenD((prev) => !prev)}
      className="inputDiv"
    >
      <div ref={inputRefs} className="inputDiv_left">
        {elements.length > 0
          ? elements?.map((item) => (
              <SelectedDropdownOptions
                name={item.name}
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
          {kita.map((tit, index) => (
            <p key={index} onClick={() => handleClickA(tit, item.name)}>
              {tit}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}

export default Input
