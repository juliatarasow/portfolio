import type { ProjectId } from "./routes";

export interface Data {
  about: About;
  projects: Project[];
}

export interface About {
  greeting: string;
  title: string;
}

export type ProjectCardProps = {
  id: ProjectId;
  title: string;
  subtitle: string;
  image: ImageProps;
};

export interface Project {
  id: ProjectId;
  title: string;
  subtitle: string;
  year: string;
  images: ImageProps[];
  projectDetails: ProjectDetails;
}

export interface ImageProps {
  src: string;
  alt: string;
  caption?: string;
  className?: string;
}

export interface ProjectHeroProps {
  title: string;
  subtitle: string;
  year: string;
  heroImage: ImageProps;
  projectDetails: ProjectDetails;
}

export interface ProjectDetails {
  stack: string[];
  role: string[];
}
