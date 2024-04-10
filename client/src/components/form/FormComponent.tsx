import { useForm } from 'react-hook-form'
import ProjectForm from './ProjectForm'
import { ProjectFormData } from 'typescript/types/Project'
import { createProject } from '../../server/projectAPI'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

export default function FormComponent() {
  const navigate = useNavigate();
  const initialValues:ProjectFormData = {
    projectName:'',
    clientName:'',
    description:''
  }
  const { register, handleSubmit, formState:{errors} } = useForm({defaultValues:initialValues})

  const handleForm = async(formData:ProjectFormData) => {
    const data = await createProject(formData);
    toast.success(`${data.message}`)
    navigate('/')
  }

  return (
    <form className='mt-10 bg-white dark:bg-slate-800 shadow-lg p-10 rounded-lg' onSubmit={handleSubmit(handleForm)} noValidate>
      <ProjectForm register ={register} errors={errors}/>
      <input type="submit" value={'Create'} className='bg-sky-700 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-700  w-full p-3 text-white uppercase font-bold rounded-md cursor-pointer transition-colors' />
    </form>
  )
}
