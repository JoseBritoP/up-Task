/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "../lib/axios"
import { isAxiosError } from "axios";

type createTaskProps = {
  name:string,
  description:string
  project:string
}
export const createTask = async(formData:createTaskProps) => {
  try {
    const { data } = await api.post(`/task`,formData);
    return data
  } catch (error:any) {
    if(isAxiosError(error) && error.response){
      const errorMessage = error.response.data.error.issues.map((issue:{message:'string'})=>issue.message)
      throw new Error(errorMessage);
    }
  }
}