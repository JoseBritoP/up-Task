import mongoose,{ Schema, Types } from "mongoose";
import { ProjectType } from "../typescript/types/project";
import Task from "./Task";

const ProjectSchema:Schema = new Schema({
  projectName:{
    type:String,
    required:true,
    trim:true
  },
  clientName:{
    type:String,
    required:true,
    trim:true
  },
  description:{
    type:String,
    required:true,
    trim:true,
  },
  tasks:[
    {
      type:Types.ObjectId,
      ref:'Task'
    }
  ],
  manager:{
    type:Types.ObjectId,
    ref:'User'
  },
  team:[
    {
      type:Types.ObjectId,
      ref:'User'
    }
  ],
},{ timestamps:true }
)

ProjectSchema.pre('deleteOne',{document:true,query:false},async function(){
  const projectId = this._id;
  if(!projectId) return;
  await Task.deleteMany({project:projectId})
})

const Project = mongoose.model<ProjectType>('Project',ProjectSchema)
export default Project