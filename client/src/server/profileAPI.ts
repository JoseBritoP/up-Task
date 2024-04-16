/* eslint-disable @typescript-eslint/no-explicit-any */
import api from "@/lib/axios";
import { ProfileForm } from "@/schema/AuthSchema";
import { isAxiosError } from "axios";

interface changeProfileInfoProps {
  profileId:string,
  formData:ProfileForm
}
export const changeProfileInfo = async ({profileId,formData}:changeProfileInfoProps) => {
  try {
    const { data } = await api.put(`auth/user/profile/${profileId}`,formData)
    return data;
  } catch (error:any) {
    if(isAxiosError(error) && error.response) throw new Error(error.response.data.error);
  }
};