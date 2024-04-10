/* eslint-disable @typescript-eslint/no-explicit-any */
import { isAxiosError } from "axios";
import api from "../lib/axios"
import { ProjectFormData } from "typescript/types/Project";

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