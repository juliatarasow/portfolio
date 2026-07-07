import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
        <a href="https://github.com/juliatarasow" target="_blank" rel="noopener noreferrer"> <FaGithub /> GitHub</a>
        <a href="https://www.linkedin.com/in/julia-tarasow-291087215/" target="_blank" rel="noopener noreferrer"> <FaLinkedin /> LinkedIn</a>
        <p>&copy; {new Date().getFullYear()} Julia Tarasow. All rights reserved.</p>
    </footer>
  )
}

export default Footer