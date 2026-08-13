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
      <div className="flex items-center justify-between pb-8">
        <h1 className="h1">{title}</h1>
        <h2 className="h2">{year}</h2>
      </div>
      <h2 className="h2-thinn padding-b-large">{subtitle}</h2>
      <div className="w-full rounded-corners main-shadow overflow-hidden mb-12">
        <Image {...heroImage} />
      </div>
      
      <div className="text-large text-wrapper p-space-regular">
        {description}
      </div>
      
      <h2 className="h2 pb-8">Projektdetails</h2>
      <div className="pb-8">
        <p className="text-nav pb-2">Stack:</p>
        <p className="text-large">{projectDetails.stack.join(", ")}</p>
      </div>
      
      <div className="padding-b-large">
        <p className="text-nav pb-2">Rolle:</p>
        <p className="text-large">{projectDetails.role.join(", ")}</p>
      </div>
    </>
  )
}

