import logo from '../../images/logo.png'
import HeaderMiddle from './HeaderMiddle'

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="logo" />
      <div className="header_middle">
        <HeaderMiddle />
      </div>
      <button>Sing In</button>
    </div>
  )
}

export default Header
