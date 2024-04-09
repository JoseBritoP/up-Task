import Logo from "./Logo";
import NavMenu from "./NavMenu";

export default function Header() {
  return (
    <header className="bg-gray-800 dark:bg-slate-950">
      <div className="max-w-screen-2xl mx-auto flex flex-row justify-between pl-5 pr-16 lg:px-0 items-center pb-5 lg:pb-0">
        <div className="w-64">
          <Logo/>
        </div>
        <NavMenu/>
      </div>
    </header>
  )
}
