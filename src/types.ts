export interface Content {
    greeting: string;
    about: About;
    projects: Project[];
}

export interface About {
    title: string;
    text: string;
}

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