import { ProjectHero } from "../components/ProjectHero"

import contentData from '../data.json'
import type { Data } from '../types'

const content: Data = contentData

export const ProjectSnippy = () => {
  const project = content.projects[1];
  const description = (
    <div>
      <p>
        Snippy ist eine Online-Plattform, die Nutzern ermöglicht eigene Snippets zu speichern und 
        Snippets von anderen Nutzern zu durchforsten.
      </p>
      <p>
        Das ursprüngliche Gruppenprojekt aus meiner Weiterbildung wird neu konzipiert und weiterentwickelt. 
        Ziel ist es, eine klare Zielgruppe zu definieren und die Anwendung darauf auszurichten.
      </p>
      <p>
        Ich überarbeite das Konzept vollständig und entwickle UX/UI sowie technische Struktur neu.
      </p>
      <p>
        Der Fokus liegt aktuell auf der Neugestaltung der Benutzerführung und der Entwicklung einer minimalistischen Version, 
        die später schrittweise erweitert wird. Erste Funktionen wie das Speichern und strukturierte Anzeigen von Snippets bilden die Grundlage.
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
    </section>
  )
}

