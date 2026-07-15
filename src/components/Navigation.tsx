import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes'

const Navigation = () => {
  return (
    <nav className="page-wrapper"> 
        <ul className="flex gap-20 py-4">
            <li className="h3"><NavLink to={ROUTES.HOME}>Julia Tarasow</NavLink></li>
            <li className="text-nav"><NavLink to={ROUTES.PROJECTS}>Projekte</NavLink></li>
            <li className="text-nav"><NavLink to={ROUTES.CONTACT}>Kontakt</NavLink></li>
        </ul>
    </nav>
  )
}   

export default Navigation