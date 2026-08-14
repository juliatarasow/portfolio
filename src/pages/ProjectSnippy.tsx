import { ProjectHero } from "../components/ProjectHero";
import { Image } from "../components/Image";
import { BackToTop } from "../components/BackToTop";

import contentData from "../content/data.json";
import { snippyText } from "../content/descriptions";
import type { Data } from "../types";

const content: Data = contentData;
const project = content.projects[1];

export const ProjectSnippy = () => {
  return (
    <main className="page-wrapper">
      <BackToTop />
      
      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        year={project.year}
        heroImage={project.images[0]}
        projectDetails={project.projectDetails}
        description={snippyText}
      />

      <h2 className="h2 pb-8">Projektdokumentation</h2>

      <section className="padding-b-large">
        <p className="text-nav pb-3">1. Competitative Evaluation</p>
        <div className="main-shadow">
          <Image src={project.images[1].src} alt={project.images[1].alt} />
        </div>
      </section>

      <section className="padding-b-large">
        <p className="text-nav pb-3">2. Erstellen von 3 Personas</p>
        <div className="grid grid-cols-3 x-gap-regular">
          <div className="main-shadow">
            <Image src={project.images[2].src} alt={project.images[2].alt} />
          </div>
          <div className="main-shadow">
            <Image src={project.images[3].src} alt={project.images[3].alt} />
          </div>
          <div className="main-shadow">
            <Image src={project.images[4].src} alt={project.images[4].alt} />
          </div>
        </div>
      </section>

      <section className="padding-b-large">
        <p className="text-nav pb-3">3. Erstellen einer Featureliste und Moscow-Methode</p>
        <div className="grid grid-cols-2 x-gap-regular">
          <div>
            <Image src={project.images[5].src} alt={project.images[5].alt} />
          </div>
          <div>
            <Image src={project.images[6].src} alt={project.images[6].alt} />
          </div>
        </div>
      </section>

      <section className="padding-b-large">
        <p className="text-nav pb-3">4. Erstellen von 4 User-Flows</p>
        <Image src={project.images[7].src} alt={project.images[7].alt} />
        <Image src={project.images[8].src} alt={project.images[8].alt} />
      </section>

      <section className="padding-b-large">
        <p className="text-nav pb-3">Die kommenden Schritte</p>
        <ul className="list-disc pl-5">
          <li>
            UI-Design
            <ul className="list-disc pl-5">
              <li>Wireframes für die Must- und Should-Features</li>
              <li>High-Fidelity-Mockup der Wireframes</li>
            </ul>
          </li>
          <li>
            Frontendentwicklung der Screens in React.js (oder einem anderen
            JavaScript-Framework)
          </li>
          <li>Backendentwicklung </li>
        </ul>
      </section>
    </main>
  );
};
