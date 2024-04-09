import { Footer, Header } from "componets/shared"
import { Outlet } from "react-router-dom"

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
