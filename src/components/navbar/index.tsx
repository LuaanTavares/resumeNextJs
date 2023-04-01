import { useState } from "react";
import { MdDensityMedium } from "react-icons/md";
import { MdClose } from "react-icons/md";
import Newprofile from "../../../public/images/new-profile.png";
import Image from "next/image";

export const Navbar = () => {

  const [isCloseOrOpen, setIsCloseOrOpen] = useState (false)
  const [scroll, setScroll] = useState (true)

  const openNavBar = () =>{
    setIsCloseOrOpen(!isCloseOrOpen)
  }

  const colorNavBar = () =>{
   if(window.scrollY >= 20){ 
    setScroll(false);
   } else { 
    setScroll(true);
   }
  };


  if (typeof window !== "undefined") {
    window.addEventListener('scroll', colorNavBar)
  }

  

  return(
    <section className={`z-10 w-full fixed  ${scroll ? ' bg-transparent' : 'bg-neutral-900'}`} id="navbar" >
    <div className="flex justify-around items-center w-full max-md:justify-between py-2 px-4">
      <div id="icon" className={`text-slate-200 text-4xl cursor-pointer md:hidden`} onClick={openNavBar}>
        {isCloseOrOpen ? <MdClose/> : <MdDensityMedium/>}
      </div> 

      <ul className= {`text-slate-200 flex text-xl font-normal gap-3 justify-center items-center max-md:hidden`}>
        <a href="#"><li className="w-14 flex justify-center hover:font-semibold duration-75">Main</li></a>
        <a href="#"><li className="w-14 flex justify-center hover:font-semibold duration-75">About</li></a>
        <a href="#"><li className="w-24 flex justify-center hover:font-semibold duration-75">Projects</li></a>
        <a href="#"><li className="w-14 flex justify-center hover:font-semibold duration-75">Skills</li></a>
        <a href="#"><li className="w-14 flex justify-center hover:font-semibold duration-75">Career</li></a>
        <a href="#"><li className="w-24 flex justify-center hover:font-semibold duration-75">Education</li></a>
        <a href="#"><li className="w-16 flex justify-center hover:font-semibold duration-75">Courses</li></a>
        <a href="#"><li className="w-40 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
        <a href="#"><li className="w-14 flex justify-center hover:font-semibold duration-75">Footer</li></a>
      </ul>

      <div className={`text-slate-200 flex items-center gap-5`}>
        <h1 className='text-center text-xl'>New User</h1>
        <Image className='h-11 w-11 rounded-full' src={Newprofile} alt="user-image" />
      </div>
    </div>

    <ul className= {`text-slate-50 flex flex-col text-xl gap-3 justify-center py-4 items-center md:hidden bg-opacity-80 ${scroll ? ' bg-black' : 'bg-neutral-900'} ${isCloseOrOpen ? 'visible':'hidden' }`}>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">Main</li></a>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">About</li></a>
      <a href="#"><li className="w-24 flex justify-center hover:font-semibold duration-75">Projects</li></a>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">Skills</li></a>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">Career</li></a>
      <a href="#"><li className="w-24 flex justify-center hover:font-semibold duration-75">Education</li></a>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">Courses</li></a>
      <a href="#"><li className="w-40 flex justify-center hover:font-semibold duration-75">More About Me</li></a>
      <a href="#"><li className="w-20 flex justify-center hover:font-semibold duration-75">Footer</li></a>
    </ul>

  </section> 
  )
}