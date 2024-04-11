import { statusTranslations } from '@/locales/qs'
import { Task } from '../../../schema/TaskSchema'
import TaskCard from './TaskCard'

interface TaskListProps{
  tasks:Task[]
}

type GroupedTask = {
  [key:string]:Task[]
}
const initialStatusGroup:GroupedTask = {
  pending:[],
  onHold:[],
  inProgress:[],
  underReview:[],
  completed:[]
}


const statusStyles:{[key:string]:string} = {
  pending:'border-t-slate-400 dark:border-t-slate-500',
  onHold:'border-t-red-400 dark:border-t-red-500',
  inProgress: 'border-t-blue-400 dark:border-t-blue-500',
  underReview: 'border-t-amber-400 dark:border-t-amber-500',
  completed: 'border-t-emerald-400 dark:border-t-emerald-500'
}
export default function TaskListContainer({tasks}:TaskListProps) {


  const groupedTasks = tasks.reduce((acc, task) => {
    let currentGroup = acc[task.status] ? [...acc[task.status]] : [];
    currentGroup = [...currentGroup, task]
    return { ...acc, [task.status]: currentGroup };
}, initialStatusGroup);

  return (
    <>
      <h2 className="text-3xl font-bold my-10">Tareas</h2>
      <div className='flex gap-5 overflow-x-scroll 2xl:overflow-auto pb-32'>
        {Object.entries(groupedTasks).map(([status, tasks]) => (
          <div key={status} className='min-w-[300px] 2xl:min-w-0 2xl:w-1/5'>
            <h3 className={` capitalize text-xl font-semibold border border-slate-300 bg-white p-3 border-t-8 dark:bg-gray-700 dark:border-slate-600 rounded-t-none rounded-md ${statusStyles[status]}`}>{statusTranslations[status]}</h3>
            <ul className='mt-5 space-y-5'>
              {tasks.length === 0 ? (
                  <li className="text-gray-500 text-center pt-3">No task</li>
              ) : (
                  tasks.map(task => <TaskCard key={task._id} task={task} />)
              )}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
