

export function Navbar() {
  return (
    <div className="w-auto h-20 bg-slate-50 text-slate-900 flex justify-between items-center px-[15.5rem]" id="home">

      <p className="text-lg font-medium hover:text-blue-900"><a href="#home">José Nazaré</a></p>
      <div>
        <ul className="flex flex-row gap-8 text-lg font-medium">
          <li><a href="#home" className="hover:text-blue-900">Home</a></li>
          <li><a href="#aboutme" className="hover:text-blue-900">About me</a></li>
          <li><a href="#skills" className="hover:text-blue-900">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-900">Projects</a></li>
          <li><a href="#contactme" className="hover:text-blue-900">Contact me</a></li>
        </ul>
      </div>
    </div>
  )
}

