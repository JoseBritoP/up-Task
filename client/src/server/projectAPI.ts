/* eslint-disable @typescript-eslint/no-explicit-any */
import { isAxiosError } from "axios";
import api from "../lib/axios"
import { ProjectFormData } from "typescript/types/Project";
import { projectsSchema } from "../schema/ProjectSchema";

export async function createProject(formData:ProjectFormData){
  try {
    const { data } = await api.post('/project',formData);
    return data
  } catch (error:any) {
    // console.log('Server error')
    // console.log(error);
    if(isAxiosError(error) && error.response){
      const errorMessage = error.response.data.error.issues.map((issue:{message:'string'})=>issue.message)
      throw new Error(errorMessage);
    }
  }
}

export async function getProjects() {
  try {
    const { data } = await api.get('/project');
    const result = projectsSchema.safeParse(data);
    if(!result.success){
      console.log('error...',result.error)
      return
    }
    return result.data;
  } catch (error:any) {
    if(isAxiosError(error) && error.response){
      throw new Error(error.response.data.error);
    }
    throw new Error(`Error fetching projects...`)
  }
}