import blob from "../assets/blob.png";
import { IconButton } from "@material-tailwind/react";


export function Header() {
  return (
    <div className="w-auto h-[90vh] flex justify-around py-4 items-center mx-[15.5rem]">
      <div className="flex items-center gap-10">
        <div className="flex flex-col gap-4 pb-8">
          <a href="https://www.linkedin.com/in/josenazare" target="_blank">
            <IconButton variant="text" className="rounded-full">
              <i className="fa-brands fa-linkedin-in text-lg" />
            </IconButton>
          </a>
          <a href="mailto:nazarejosecontact@gmail.com" target="_blank">
            <IconButton variant="text" className="rounded-full">
              <i className="fa-solid fa-at text-lg" />
            </IconButton>
          </a>
          <a href="https://github.com/nazarejose" target="_blank">
            <IconButton variant="text" className="rounded-full">
              <i className="fab fa-github text-lg" />
            </IconButton>
          </a>
        </div>

          <div className="flex flex-col gap-4">
              <div className="py-2 text-4xl">Hi there! I'm José Nazaré</div>
              <div className="text-2xl"><a className="text-blue-800">Front End</a> Developer</div>
              <p className="text-xl w-10/12 text-pretty text-start antialiased">Front End Developer with experience and a passion for creating engaging and responsive user interfaces.</p>
              <a href="https://www.linkedin.com/in/josenazare">
                <IconButton color="blue" className="rounded-lg flex flex-row items-center justify-center w-4/12 h-16 bg-blue-950 text-slate-300">
                 <p>Contact me  <i className="pl-2 fa-regular fa-paper-plane text-lg" /></p>
                </IconButton></a>
        </div>
      </div>
            
      <img src={blob} alt="blob josé photo" className="w-[30rem] h-[30rem]"/>

    </div>
    
  )
}

