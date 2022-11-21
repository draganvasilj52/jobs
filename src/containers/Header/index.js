import logo from '../../images/logo.png'
import { useState } from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderSM from '../../common/HeaderSM'

function Header() {
  const [openBurger, setOpenBurger] = useState(false)

  return (
    <div className={` ${openBurger ? 'burger' : 'header'}`}>
      {!openBurger ? (
        <>
          <img src={logo} alt="logo" />
          <div className="header_middle">
            <HeaderMiddle />
          </div>
          <div className="header_right">
            <button>Sing In</button>
            <div
              onClick={() => setOpenBurger((prev) => !prev)}
              className="header_right_two"
            >
              <span> &#9776;</span>
            </div>
          </div>
        </>
      ) : (
        <HeaderSM setOpenBurger={setOpenBurger} />
      )}
    </div>
  )
}

export default Header
