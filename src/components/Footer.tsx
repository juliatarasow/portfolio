import { FaGithub } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="page-wrapper flex justify-between py-4">
      <div className="flex gap-6 text-regular">
        <a className="flex" href="https://github.com/juliatarasow" target="_blank" rel="noopener noreferrer"> 
          <FaGithub className="footer-icon" /> 
          GitHub
        </a>
        
        <a className="flex items-center" href="https://www.linkedin.com/in/julia-tarasow-291087215/" target="_blank" rel="noopener noreferrer"> 
          <FaLinkedin className="footer-icon" /> 
          LinkedIn
        </a>
      </div>
        
        <p>
          &copy; {new Date().getFullYear()} Julia Tarasow. All rights reserved.
        </p>
    </footer>
  )
}

