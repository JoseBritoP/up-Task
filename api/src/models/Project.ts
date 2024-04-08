import mongoose,{ Schema } from "mongoose";
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
  descrition:{
    type:String,
    required:true,
    trim:true,
  }
})

const Project = mongoose.model<ProjectType>('Project',ProjectSchema)
export default Project