import { type ProjectHeroProps } from '../types';

export const ProjectHero = ({ 
  title, 
  subtitle, 
  year, 
  heroImage, 
  projectDetails 
}: ProjectHeroProps) => {
  return (
    <>
    <div className="flex">
      <h1 className="h1">{title}</h1>
      <h2 className="h2">{year}</h2>
    </div>
    <h2 className="h2">{subtitle}</h2>
    Hello Project Hero!
        // Überschrift & Jahr
        // Unterüberschrift
        // großes Bild
        // Beschreibungstext
        //Projekt-Details (Stack, Rolle)
    </>
  )
}

