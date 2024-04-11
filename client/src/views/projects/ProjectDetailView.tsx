import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { getProject } from '../../server/projectAPI';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import AddTaskModal from '@/components/Card/task/AddTaskModal';
import TaskList from '@/components/Card/task/TaskList';

export default function ProjectDetailView() {

  const navigate = useNavigate();
  const params = useParams();
  const projectId = params.projectId!

  const { data,isError,isLoading } = useQuery({
    queryKey:['project',projectId],
    queryFn:()=>getProject(projectId),
    retry:false
  })

  if(isError){
    <Navigate to={'/404'}></Navigate>
  }
  
  if(isLoading){
    return (<p>Loading...</p>)
  }
  if(!data || data === undefined) {
    <Navigate to={'/404'}></Navigate>
  }

  return (
    <article>
      <h1 className='text-4xl font-bold uppercase'>{data?.projectName}</h1>
      <p className='text-2xl font-light text-gray-500 dark:text-gray-400 mt-5'>{data?.description}</p>
      <nav className='my-5 flex gap-3'>
        <button className='bg-sky-500 hover:bg-sky-600 dark:bg-sky-700 dark:hover:bg-sky-600 px-6 py-2 text-white text-xl font-semibold cursor-pointer transition-colors rounded-md text-center' onClick={()=>navigate(location.pathname + `?newTask=true`)}>Add task</button>
      </nav>
      {data && data.tasks && <TaskList tasks={data.tasks}/>}
      <AddTaskModal/>
    </article>  
  )
}
