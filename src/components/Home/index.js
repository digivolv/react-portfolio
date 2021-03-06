import "./index.scss"
import LogoTitle from "../../assets/images/logo-s.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import AnimatedLetters from "../AnimatedLetters"
import Logo from "../Logo"

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate")
  const nameArray = ["e", "d", "w", "i", "n"]
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ]

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 4000)
  }, [])
  // const jobArray = ['f','u','l','l','-','s','t','a','c','k']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={15}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={20}
          />
        </h1>
        <h2>Fullstack Developer</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
      <Logo />
    </div>
  )
}

export default Home
