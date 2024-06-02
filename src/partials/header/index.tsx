import "./index.scss"
import logo from "../../assets/logo.png"

const Header = () => {
  return (
    <header className="header">
      <div className="container header__content">
        <img className="header__logo" src={logo} alt="logo" />
      </div>
    </header>
  )
}

export default Header