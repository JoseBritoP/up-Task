import z from 'zod';

const name = z.string({
  invalid_type_error:'The task name must be a string',
  required_error:'The name of the task is required',}
).trim().min(3,{message:'The name of task is to short'}).max(50,{message:'The name of task is to long'});

const description = z.string({
  invalid_type_error:'The description of the task must be a string',
  required_error:'A description is required',
}).trim().min(3,{message:'The description is to short'}).max(200,{message:'The description is to long'})

const status = z.enum(['pending','onHold','inProgress','underReview','completed']).default('pending')

export const taskSchema = z.object({
  name,
  description,
  status
})

export const tasksSchema = z.array(taskSchema);
export type Task = z.infer<typeof taskSchema>;
export type Tasks = z.infer<typeof tasksSchema>;
export type TaskFormData = Pick<Task,'name'| 'description'>;