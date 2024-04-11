import { useMutation,useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { TaskFormData } from "schema/TaskSchema";
import { createTask } from "../server/taskAPI";

export default function useFormTaskComponent() {

  const navigate = useNavigate();
  const initialValues:TaskFormData = {
    name:'',
    description:''
  }

  const { projectId } = useParams();

  const { register, handleSubmit,reset, formState:{errors} } = useForm({defaultValues:initialValues})

  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn:createTask,
    onError:(error)=>{
      toast.error(`${error.message}`)
    },
    onSuccess:(data)=>{
      queryClient.invalidateQueries({queryKey:['project',projectId]})
      toast.success(`${data.message}`)
      reset()
      navigate(location.pathname,{replace:true})
    }
  });
  const handleForm = (formData:TaskFormData) => {
    const data = {
      name:formData.name,
      description:formData.description,
      project:projectId!
    }
    mutation.mutate(data);
  }

  return { register, handleSubmit, errors, handleForm }
}
