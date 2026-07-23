import type { ProjectCardProps } from "../types";

export const ProjectCard = ({
  title,
  subtitle,
  image,
}: ProjectCardProps) => {
  return (
    <div className="card-shadow relative aspect-square overflow-hidden">
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover"/>
      <div className="absolute bottom-0 w-full p-4 bg-white">
        <h2 className="h2">{title}</h2>
        <p className="text-regular">{subtitle}</p>
      </div>
    </div>
  )
}


