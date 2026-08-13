import { ProjectHero } from "../components/ProjectHero";
import { Image } from "../components/Image";

import contentData from "../content/data.json";
import { participantsText } from "../content/descriptions";
import type { Data } from "../types";

const content: Data = contentData;
const project = content.projects[0];

export const ProjectParticipants = () => {
  return (
    <main className="page-wrapper">
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        year={project.year}
        heroImage={project.images[0]}
        projectDetails={project.projectDetails}
        description={participantsText}
      />

      <section className="flex justify-center padding-b-large">
        <div className="w-2/3">
          <Image
            src={project.images[1].src}
            alt={project.images[1].alt}
            caption={project.images[1].caption}
            captionClassName="text-center"
          />
        </div>
      </section>

      <section className="flex items-center  x-gap-regular padding-b-large">
        <div className="w-1/4 main-shadow">
          <Image src={project.images[2].src} alt={project.images[2].alt} />
        </div>

        <div className="w-3/4 main-shadow">
          <Image src={project.images[3].src} alt={project.images[3].alt} />
        </div>
      </section>
    </main>
  );
};
