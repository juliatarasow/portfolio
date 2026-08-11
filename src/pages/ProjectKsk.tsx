import { ProjectHero } from "../components/ProjectHero"
import { Image } from "../components/Image"

import contentData from '../data.json'
import type { Data } from '../types'

const content: Data = contentData

export const ProjectKsk = () => {
  const project = content.projects[2];
  const description = (
    <div>
      <p>
        Der KSK ist ein jährlich stattfindender Kongress, der von Studierenden in wechselnden Städten 
        organisiert wird. Künstlern halten Vorträge und Workshops im Rahmen eines umfangreichen Veranstaltungsprogramms.
      </p>
      <p>
        Für die Ausgabe 2024 in Leipzig wurde Unterstützung im Bereich Grafikdesign benötigt.
      </p>
      <p>
        Ich habe das visuelle Erscheinungsbild der Veranstaltung entwickelt und auf verschiedene 
        Print- und Digitalmedien übertragen.
      </p>
      <p>
        Dazu gehörten das Programmheft, Sticker, Social-Media-Visuals, Namensschilder und Jutebeutel sowie eine minimal 
        gestaltete Website zur Bereitstellung zentraler Informationen.
      </p>
    </div>
  );
  return (
    <section className="page-wrapper">
      <ProjectHero 
        title={project.title} 
        subtitle={project.subtitle} 
        year={project.year} 
        heroImage={project.images[0]} 
        projectDetails={project.projectDetails} 
        description={description}
      />   
      <Image src={project.images[1].src} alt={project.images[1].alt} />   
      <Image src={project.images[2].src} alt={project.images[2].alt} /> 
      <Image src={project.images[3].src} alt={project.images[3].alt} /> 
      <Image src={project.images[4].src} alt={project.images[4].alt} /> 
      <Image src={project.images[5].src} alt={project.images[5].alt} /> 
      <Image src={project.images[6].src} alt={project.images[6].alt} /> 
      <Image src={project.images[7].src} alt={project.images[7].alt} /> 
    </section>
  )
}

