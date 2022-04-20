import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          Hi, <br /> I'm <img src={LogoTitle} alt="developer"></img>
          Edwin
          <br />
          web developer
        </h1>
        <h2>Fullstack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
