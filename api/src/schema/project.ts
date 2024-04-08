import z from 'zod'

const projectName = z.string({
  invalid_type_error:'The project name must be a string',
  required_error:'The name of the project is required',}
).trim().min(3,{message:'The name of project is to short'}).max(30,{message:'The name of project is to long'});

const clientName = z.string({
  invalid_type_error:'The client name of the project must be a string',
  required_error:'The name of the client is required',
}).trim().min(3,{message:'The name of client is required'}).max(30,{message:'The name of client is to long'});

const description = z.string({
  invalid_type_error:'The description of the project must be a string',
  required_error:'A description is required',
}).trim().min(3,{message:'The description is to short'}).max(30,{message:'The description is to long'})


export const projectSchema = z.object({
  projectName,
  clientName,
  description,
});