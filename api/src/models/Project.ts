import mongoose,{ Schema, Types } from "mongoose";
import { ProjectType } from "../typescript/types/project";

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

const Project = mongoose.model<ProjectType>('Project',ProjectSchema)
export default Project