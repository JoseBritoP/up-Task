import { Outlet } from "react-router-dom"

export default function AppLayout() {
  return (
    <>
      <h1 className="">AppLayout</h1>    
      <Outlet/>  
    </>
  )
}
