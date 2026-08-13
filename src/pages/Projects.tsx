import { ProjectCard } from '../components/ProjectCard.tsx'

import contentData from '../content/data.json'
import type { Data } from '../types'
import { PROJECT_IDS } from "../routes";

const content: Data = contentData 

export const Projects = () => {
  return (
    <section className="page-wrapper">
      <h1 className="h1 mb-14">Projekte</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 x-gap-large">
        {content.projects.map((project, index) => (
          <ProjectCard
            id={PROJECT_IDS[index]}
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            image={project.images[0]}
          />
        ))}
      </div>
    </section>
  )
}

