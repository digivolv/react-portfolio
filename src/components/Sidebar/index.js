import "./index.scss"
import { Link } from "react-router-dom"
import Sidebar from "../Sidebar/index"
import LogoS from "../../assets/images/logo-s.png"
import LogoSubtitle from "../../assets/images/logo_sub.png"

const Layout = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
        <img src={LogoSubtitle} alt="logoSubtitle" />
      </Link>
    </div>
  )
}

export default Layout
