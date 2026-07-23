import { NavLink } from 'react-router-dom'
import { ROUTES } from '../routes'

export const Navigation = () => {
  return (
    <nav className="page-wrapper"> 
        <ul className="flex items-end gap-20 py-4 mb-14">
            <li className="h3"><NavLink to={ROUTES.HOME}>Julia Tarasow</NavLink></li>
            <li className="text-nav"><NavLink to={ROUTES.PROJECTS}>Projekte</NavLink></li>
            <li className="text-nav"><NavLink to={ROUTES.CONTACT}>Kontakt</NavLink></li>
        </ul>
    </nav>
  )
}   

