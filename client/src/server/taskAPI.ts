/* eslint-disable @typescript-eslint/no-explicit-any */
import { taskPrincipalSchema } from "../schema/TaskSchema";
import api from "../lib/axios"
import { isAxiosError } from "axios";
import { updateTaskFn } from "typescript/interfaces/Task";

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

export const getTaskId = async (taskId:string) => {
  try {
    const { data } = await api.get(`/task/${taskId}`);
    const result = taskPrincipalSchema.safeParse(data);
    if(!result.success) return;
    return data
  } catch (error:any) {
    if(isAxiosError(error) && error.response){
      throw new Error(error.response.data.error);
    }
  }
};

export const updateTask = async (formData:updateTaskFn) => {
  try {
    const { data } = await api.put(`/task/${formData.taskId}`,formData.formData);
    return data;
  } catch (error:any) {
    if(isAxiosError(error) && error.response){
      const errorMessage = error.response.data.error.issues.map((issue:{message:'string'})=>issue.message)
      throw new Error(errorMessage);
    }
  }
}