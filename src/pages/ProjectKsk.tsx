import { ProjectHero } from "../components/ProjectHero";
import { Image } from "../components/Image";
import { BackToTop } from "../components/BackToTop";

import contentData from "../content/data.json";
import { kskText } from "../content/descriptions";
import type { Data } from "../types";

const content: Data = contentData;
const project = content.projects[2];

export const ProjectKsk = () => {
  return (
    <main className="page-wrapper">
      <BackToTop />

      <ProjectHero
        title={project.title}
        subtitle={project.subtitle}
        year={project.year}
        heroImage={project.images[0]}
        projectDetails={project.projectDetails}
        description={kskText}
      />

      <section className="padding-b-large">
        <div className="flex items-center x-gap-regular">
          <div className="w-3/4 main-shadow">
            <Image src={project.images[1].src} alt={project.images[1].alt} />
          </div>
          <div className="w-1/4">
            <Image src={project.images[2].src} alt={project.images[2].alt} />
          </div>
        </div>
        <p className="text-caption">
          Doppelseite aus Programmheft und Namensschild
        </p>
      </section>

      <section className="flex justify-center padding-b-large">
        <button
          onClick={() =>
            window.open(
              "/assets/images/ksk/104_KSK_Leipzig_Programmheft_klein.pdf",
              "_blank",
            )
          }
          className="text-nav card-shadow border border-solid p-2 main-shadow card-hover button-hover"
        >
          Programmheft anschauen
        </button>
      </section>

      <section className="padding-b-large">
        <div className="flex items-center x-gap-regular">
          <div className="w-1/4">
            <Image src={project.images[3].src} alt={project.images[3].alt} />
          </div>
          <div className="w-3/4 main-shadow">
            <Image src={project.images[4].src} alt={project.images[4].alt} />
          </div>
        </div>
        <p className="text-caption text-right">
          Sticker und Doppelseite aus Programmheft
        </p>
      </section>

      <section className="flex justify-center padding-b-large">
        <div className="w-2/3 main-shadow">
          <Image src={project.images[5].src} alt={project.images[5].alt} />
        </div>
      </section>

      <section className="flex items-center padding-b-large">
        <div className="w-3/5">
          <Image src={project.images[6].src} alt={project.images[6].alt} />
        </div>
        <div className="w-2/5">
          <Image src={project.images[7].src} alt={project.images[7].alt} />
        </div>
      </section>
    </main>
  );
};
