import ErrorMessage from "@/components/shared/ErrorMessage"
import { LoginForm as LoginAuth } from "@/schema/AuthSchema"
import { useForm } from "react-hook-form"


export default function LoginForm() {
  
  const initialValues: LoginAuth = {
    email: '',
    password: '',
  }
  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: initialValues })

  const handleLogin = (formData: LoginAuth) => { 
    console.log(formData)
  }

  return (
    <>
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="space-y-8 p-10 bg-white rounded-md"
        noValidate
      >
        <div className="flex flex-col gap-5">
          <label htmlFor="email" className="font-normal text-2xl">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            className="w-full p-3  border-gray-300 border rounded-md"
            {...register("email", {
              required: "The email is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "E-mail invalid",
              },
            })}
          />
          {errors.email && (
            <ErrorMessage>{errors.email.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-5">
          <label htmlFor="password" className="font-normal text-2xl">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Your password"
            className="w-full p-3  border-gray-300 border rounded-md"
            {...register("password", {
              required: "The password is required",
            })}
          />
          {errors.password && (
            <ErrorMessage>{errors.password.message}</ErrorMessage>
          )}
        </div>
        <input
          type="submit"
          value='Sign in'
          className="bg-sky-600 hover:bg-sky-700 w-full p-3 text-white font-medium  text-xl cursor-pointer rounded-md"
        />
      </form>
    </>
  )
}
