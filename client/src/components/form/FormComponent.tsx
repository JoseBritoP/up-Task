import { useForm } from 'react-hook-form'
import ProjectForm from './ProjectForm'
import { ProjectFormData } from 'typescript/types/Project'

export default function FormComponent() {
  const initialValues:ProjectFormData = {
    projectName:'',
    clientName:'',
    description:''
  }
  const { register, handleSubmit, formState:{errors} } = useForm({defaultValues:initialValues})

  const handleForm = (data:ProjectFormData) => {
    console.log(data)
  }
  return (
    <form className='mt-10 bg-white dark:bg-slate-800 shadow-lg p-10 rounded-lg' onSubmit={handleSubmit(handleForm)} noValidate>
      <ProjectForm register ={register} errors={errors}/>
      <input type="submit" value={'Create'} className='bg-sky-700 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700  w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer transition-colors' />
    </form>
  )
}
