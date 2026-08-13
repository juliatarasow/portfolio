import { Link } from "react-router-dom";

import { Image } from "./Image";

import type { ProjectCardProps } from "../types";
import { ROUTES } from "../routes";

export const ProjectCard = ({
  id,
  title,
  subtitle,
  image,
}: ProjectCardProps) => {
  return (
    <Link to={ROUTES[id]}>
      <div className="main-shadow relative aspect-square overflow-hidden">
        <Image src={image.src} alt={title} className="absolute inset-0 w-full h-full object-cover"/>
        <div className="absolute bottom-0 w-full min-h-31 pt-2 p-4 bg-white">
          <h2 className="h2">{title}</h2>
          <p className="text-regular">{subtitle}</p>
        </div>
      </div>
    </Link>  
  )
}


