import { Image } from './Image';
import { type ProjectHeroProps } from '../types';

export const ProjectHero = ({ 
  title, 
  subtitle, 
  year, 
  heroImage, 
  projectDetails,
  description
}: ProjectHeroProps) => {
  return (
    <>
    <div className="flex">
      <h1 className="h1">{title}</h1>
      <h2 className="h2">{year}</h2>
    </div>
    <h2 className="h2">{subtitle}</h2>
    <Image {...heroImage} />
    {description}

    <h2 className="h2">Projektdetails</h2>
    <p className="text-nav">Stack:</p>
    <p>{projectDetails.stack.join(", ")}</p>

    <p className="text-nav">Rolle:</p>
    <p>{projectDetails.role.join(", ")}</p>
    </>
  )
}

