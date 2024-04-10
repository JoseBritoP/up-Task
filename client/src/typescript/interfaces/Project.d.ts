import { Project, ProjectFormData } from "typescript/types/Project"

export interface ProjectFormProps {
  register:UseFormRegister<ProjectFormData>
  errors:FieldErrors<ProjectFormData>
}

export interface ProjectCardContainerProps {
  data:Project[]
}

export interface ProjectCardProps {
  project:Project
}