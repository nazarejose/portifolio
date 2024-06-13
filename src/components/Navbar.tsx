
const navTexts = [
  { name: "Home",
    href: "#"
  },
  { name: "About me",
    href: "#"
  },
  { name: "Skills",
    href: "#"
  },
  { name: "Projects",
    href: "#"
  },
  { name: "Contact me",
    href: "#"
  }
]

export function Navbar() {
  return (
    <div className="w-auto h-20 bg-slate-50 text-slate-900 flex justify-between items-center px-[15.5rem]" id="home">

      <p className="text-lg font-medium hover:text-blue-900"><a href="#home">José Nazaré</a></p>
      <div>
        <ul className="flex flex-row gap-8 text-lg font-medium">
          {
            navTexts.map((element)=>{
              return(
                <li><a href={element.href} className="hover:text-blue-900">{element.name}</a></li>
              )
            })
          }
        </ul>
      </div>
    </div>

  )
}

 