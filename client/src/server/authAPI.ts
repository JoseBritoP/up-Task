/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios";
import { isAxiosError } from "axios";
import { Auth } from "@/schema/AuthSchema";

export async function createAccount(formData:Auth){
  try {
    const { data } = await api.post('/auth/create-account',formData)
    return data
  } catch (error:any) {
    if(isAxiosError(error) && error.message){
      throw new Error(error.response?.data.error)
    }
  }
}