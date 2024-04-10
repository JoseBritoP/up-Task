import { ProjectFormData } from "typescript/types/Project"

export interface ProjectFormProps {
  register:UseFormRegister<ProjectFormData>
  errors:FieldErrors<ProjectFormData>
}