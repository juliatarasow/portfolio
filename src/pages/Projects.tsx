import { ProjectCard } from '../components/ProjectCard.tsx'

import contentData from '../data.json'
import type { Data } from '../types'

const content: Data = contentData

export const Projects = () => {
  return (
    <section className="page-wrapper">
      <h1 className="h1 mb-14">Projekte</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {content.projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            subtitle={project.subtitle}
            image={project.images[0].src}
          />
        ))}
      </div>
    </section>
  )
}

