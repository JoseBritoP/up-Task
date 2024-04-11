import { Fragment } from 'react'
import { Task } from '../../../schema/TaskSchema'
import { Menu, Transition } from '@headlessui/react'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom'

interface TaskCardProps {
  task:Task
}
export default function TaskCard({task}:TaskCardProps) {

  const navigate = useNavigate();
  return (
    <li className='p-5 bg-white dark:bg-gray-700/60 border-2 border-slate-300 dark:border-slate-600 flex justify-between gap-3 rounded-md'>
      <div className='min-w-0 flex flex-col gap-y-4'>
        <button className='text-xl font-semibold text-slate-600 dark:text-slate-300 text-left'>{task.name}</button>
        <p className='text-slate-500 dark:text-slate-300'>{task.description}</p>
      </div>
      <div className="flex shrink-0  gap-x-6">
        <Menu as="div" className="relative flex-none">
          <Menu.Button className="-m-2.5 block p-2.5 text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white">
            <span className="sr-only">options</span>
            <EllipsisVerticalIcon className="h-9 w-9" aria-hidden="true" />
          </Menu.Button>
            <Transition as={Fragment} enter="transition ease-out duration-100" enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100" leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100" leaveTo="transform opacity-0 scale-95">
              <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white dark:bg-gray-700 py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                <Menu.Item>
                  <button type='button' className='block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-gray-300' 
                  onClick={()=>navigate(location.pathname+`?taskId=${task._id}`)}> See Task</button>
                </Menu.Item>
                <Menu.Item>
                  <button type='button' className='block px-3 py-1 text-sm leading-6 text-gray-900 dark:text-gray-300'
                  onClick={()=>navigate(location.pathname+`?editTask=${task._id}`)} >Edit Task</button>
                </Menu.Item>
                <Menu.Item>
                  <button type='button' className='block px-3 py-1 text-sm leading-6 text-red-500 font-semibold'>Delete Task</button>
                </Menu.Item>
              </Menu.Items>
            </Transition>
        </Menu>
      </div>
    </li>
  )
}
