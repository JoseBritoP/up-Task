export interface CreateProjectProps {
  projectName:string
  clientName:string
  description:string
}

export interface UpdateProjectProps {
  id:string
  data:{
    projectName?:string
    clientName?:string
    description?:string
  }
}