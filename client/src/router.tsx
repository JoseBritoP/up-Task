import { BrowserRouter,Routes,Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import DashboardView from "./views/DashboardView";
import CreateProjectView from "./views/projects/CreateProjectView";
import EditProjectView from "./views/projects/EditProjectView";
import ProjectDetailView from "./views/projects/ProjectDetailView";
import AuthLayout from "./layouts/AuthLayout";
import AuthView from "./views/auth/AuthView";
import ConfirmAccount from "./views/auth/ConfirmAccount";
import RequestNewCode from "./views/auth/RequestNewCode";
import ResetPassword from "./views/auth/ResetPassword";
import NewPassword from "./views/auth/NewPassword";
import ProjectTeamView from "./views/projects/ProjectTeamView";

export default function Router(){
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
          <Route path="/projects" element={<DashboardView/>} index/>
          <Route path="/projects/create" element={<CreateProjectView/>}/>
          <Route path="/projects/:projectId" element={<ProjectDetailView/>}/>
          <Route path="/projects/:projectId/edit" element={<EditProjectView/>}/>
          <Route path="/projects/:projectId/team" element={<ProjectTeamView/>}/>
        </Route>
        <Route element={<AuthLayout/>}>
          <Route path="/auth" element={<AuthView/>}/>
          <Route path="/auth/confirm-account" element={<ConfirmAccount/>}/>
          <Route path="/auth/request-code" element={<RequestNewCode/>}/>
          <Route path="/auth/forget-password" element={<ResetPassword/>}/>
          <Route path="/auth/new-password" element={<NewPassword/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}