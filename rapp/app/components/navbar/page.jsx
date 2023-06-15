'use client'
import { useState } from "react";

export default function Navbar() {

  let Links = [
    { name: "Home", link: "/" },
    { name: "Projects", link: "/projects" }, /* keep one of the pages empty so u can test loading and error pages */
    { name: "About", link: "/about" },
    { name: "Contact", link: "/contact" },
  ];

  let [open,setOpen] = useState(false);

  return (
    <div className="md:px-20 m-0 px-10 py-6 bg-slate-900">
      <div className=" md:flex items-center justify-between">
        <div className="flex justify-between w-full">
          <a href="/" className="md:text-3xl text-2xl text-white cursor-pointer"> Logo </a>
          <button className="md:hidden cursor-pointer" onClick={ () => setOpen(!open)  } > 
          <ion-icon size="large" name={ open ? "close-outline" : "menu-outline" }></ion-icon>
          </button>
        </div>
        
        <ul className={`md:flex md:items-center md:opacity-100 h-auto duration-300 ease-in ${ open ? 'visible' : 'hidden' }  `}>
          {Links.map((link) => (
            <li className="md:ml-8 text-xl h-auto md:my-0 my-5 ">
              <a href={link.link} className=" text-white hover:text-gray-500 md:px-3">{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
