import { ProjectHero } from "../components/ProjectHero";
import { Image } from "../components/Image";

import contentData from "../data.json";
import type { Data } from "../types";

const content: Data = contentData;

export const ProjectParticipants = () => {
  const project = content.projects[0];
  const description = (
    <div>
      <p>
        Für Studien am Max-Planck-Institut werden Probanden rekrutiert und
        Termine koordiniert.
      </p>
      <p>
        Mitarbeitende hatten Schwierigkeiten, den Überblick über Termine zu
        behalten.
      </p>
      <p>
        Im Rahmen meiner Abschlussarbeit habe ich ein Frontend-Modul konzipiert
        und umgesetzt – von der Anforderungsanalyse über UX/UI-Design bis zur
        Entwicklung.
      </p>
      <p>
        Entstanden ist eine tabellarische Übersicht aller studienbezogenen
        Termine mit Statusanzeige und Bearbeitung über modale Dialoge. Dadurch
        behalten Mitarbeitende auch bei hoher Auslastung den Überblick und
        sparen Zeit.
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
    </section>
  );
};
