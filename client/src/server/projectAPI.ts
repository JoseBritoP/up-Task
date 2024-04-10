/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../lib/axios"
import { ProjectFormData } from "typescript/types/Project";

export async function createProject(formData:ProjectFormData){
  console.log(formData)
  try {
    const { data } = await api.post('/project',formData);
    console.log(data);
    return data
  } catch (error:any) {
    console.log(error);
  }
}