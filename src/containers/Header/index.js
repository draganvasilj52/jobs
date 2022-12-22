import logo from '../../images/logo.png'
import { useState } from 'react'
import HeaderMiddle from './HeaderMiddle'
import HeaderSM from '../../common/HeaderSM'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../features/userSlice'

function Header() {
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.user)
  console.log(user)
  const [openBurger, setOpenBurger] = useState(false)
  const navigate = useNavigate()

  const handleUser = () => {
    if (user) {
      dispatch(logoutUser())
      navigate('/')
    } else {
      navigate('auth')
    }
  }
  return (
    <div className={` ${openBurger ? 'burger' : 'header'}`}>
      {!openBurger ? (
        <>
          <img
            style={{ cursor: 'pointer' }}
            onClick={() => navigate('/')}
            src={logo}
            alt="logo"
          />
          <div className="header_middle">
            <HeaderMiddle />
          </div>
          <div className="header_right">
            <button onClick={handleUser}>{!user ? 'Sing In' : 'Logout'}</button>
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
