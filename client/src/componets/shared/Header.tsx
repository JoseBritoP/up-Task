import Logo from "./Logo";

export default function Header() {
  return (
    <header className="bg-gray-800 dark:bg-slate-950">
      <div className="max-w-screen-2xl mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="w-64">
          <Logo/>
        </div>
      </div>
    </header>
  )
}
