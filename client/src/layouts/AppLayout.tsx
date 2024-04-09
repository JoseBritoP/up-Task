import { Outlet } from "react-router-dom"
import Header from "../componets/shared/Header"
import Footer from "../componets/shared/Footer"

export default function AppLayout() {
  return (
    <>
      <Header/>
      <section className="max-w-screen-2xl mx-auto mt-10 p-5">
        <Outlet/>  
      </section>
      <Footer/>
    </>
  )
}
