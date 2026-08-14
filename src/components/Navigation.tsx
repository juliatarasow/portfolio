import { NavLink } from "react-router-dom";
import { ROUTES } from "../routes";

export const Navigation = () => {
  return (
    <nav className="page-wrapper">
      <ul className="flex items-end gap-20 py-4 mb-14">
        <li className="h3 link-hover">
          <NavLink to={ROUTES.HOME}>
            Julia Tarasow
          </NavLink>
        </li>
        <li className="text-nav">
          <NavLink 
                to={ROUTES.PROJECTS}
                className={({ isActive }) =>
                  `link-hover ${isActive ? "active" : ""}`
                }
          >
            Projekte
          </NavLink>
        </li>
        <li className="text-nav">
          <NavLink 
                to={ROUTES.CONTACT}
                className={({ isActive }) =>
                  `link-hover ${isActive ? "active" : ""}`
                }
          >
            Kontakt
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
