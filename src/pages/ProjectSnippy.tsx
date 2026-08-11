import { ProjectHero } from "../components/ProjectHero"
import { Image } from "../components/Image"

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
      <h2 className="h2">Projektdokumentation</h2>  
      <p className="text-nav">1. Competitative Evaluation</p>
      <Image src={project.images[1].src} alt={project.images[1].alt} />

      <p className="text-nav">2. Erstellen von 3 Personas</p>
      <Image src={project.images[2].src} alt={project.images[2].alt} />
      <Image src={project.images[3].src} alt={project.images[3].alt} />
      <Image src={project.images[4].src} alt={project.images[4].alt} />

      <p className="text-nav">3. Erstellen einer Featureliste und Moscow-Methode</p>
      <Image src={project.images[5].src} alt={project.images[5].alt} />
      <Image src={project.images[6].src} alt={project.images[6].alt} />

      <p className="text-nav">4. Erstellen von 4 User-Flows</p>
      <Image src={project.images[7].src} alt={project.images[7].alt} />
      <Image src={project.images[8].src} alt={project.images[8].alt} />

      <p className="text-nav">Die kommenden Schritte</p>
      <ul className="list-disc pl-5">
        <li>UI-Design
          <ul className="list-disc pl-5">
            <li>Wireframes für die Must- und Should-Features</li>
            <li>High-Fidelity-Mockup der Wireframes</li>
          </ul>
        </li>
        <li>Frontendentwicklung der Screens in React.js (oder einem anderen JavaScript-Framework)</li>
        <li>Backendentwicklung </li>
      </ul>
    </section>
  )
}

