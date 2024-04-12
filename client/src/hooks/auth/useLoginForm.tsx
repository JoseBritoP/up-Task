import { LoginForm } from "@/schema/AuthSchema";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { authenticateUser } from "@/server/authAPI";
import { toast } from "react-toastify";

export default function useLoginForm() {

  const initialValues: LoginForm = {
    email: "",
    password: "",
  };

  const { register, handleSubmit, reset, formState: { errors } } = useForm<LoginForm>({ defaultValues: initialValues });

  const { mutate } = useMutation({
    mutationFn: authenticateUser,
    onError: (error) => {
      toast.error(error.message);
    },
    onSuccess: (data) => {
      toast.success(data.message);
      reset();
    },
  });

  const handleLogin = (formData: LoginForm) => {
    mutate(formData);
  };

  return { register, handleSubmit, handleLogin, errors };
}
