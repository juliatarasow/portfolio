export interface Data {
    about: About;
    projects: Project[];
}

export interface About {
    greeting: string;
    title: string;
}

export type ProjectCardProps = {
  title: string;
  subtitle: string;
  image: string;
};

export interface Project {
    title: string;
    subtitle: string;
    year: string;
    images: Image[];
    projectDetails: ProjectDetails;
}

export interface Image {
    name: string;
    src: string;
    alt: string;
    caption?: string;
}

export interface ProjectDetails {
    stack: string[];
    role: string[];
}
