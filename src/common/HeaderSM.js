import JobsDropdown from '../containers/Header/HeaderMiddle/dropdowns/JobsDropdown'
import logo from '../images/logo.png'
const HeaderSM = ({ setOpenBurger }) => {
  return (
    <div className="burger_main">
      <div className="burger_main_top">
        <div className="burger_main_top_logo">
          <img src={logo} alt="logo" />
          <span onClick={() => setOpenBurger((prev) => !prev)}>&#10005;</span>
        </div>
        <h3>Jobs</h3>
        <div className="burger_main_top_options">
          <JobsDropdown />
        </div>
      </div>
      <div className="burger_main_bottom">
        <button>Sign Up</button>
      </div>
    </div>
  )
}

export default HeaderSM
