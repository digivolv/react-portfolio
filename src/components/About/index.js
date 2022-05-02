import { useEffect, useState } from "react"
import AnimatedLetters from "../AnimatedLetters"
import "./index.scss"

const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate")

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover")
    }, 3000)
  }, [])

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>Paragraph 1</p>
        <p>Paragraph 2</p>
        <p>Paragraph 3</p>
        <p>Paragraph 4</p>
      </div>
    </div>
  )
}

export default About
