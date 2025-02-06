import { FaBars } from "react-icons/fa6";

import DevIMG from '../assets/10169718.png'
import { Link } from "react-router-dom";

const Navbar = () => {
    const  navOptions=<>
      <li><a href="#AboutMe">About Me</a></li>
      <li><a href="#skills">My Skills</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact-me">Contact Me</a></li>


    </>
    return (
     
          <div className="bg-transparent backdrop-blur-2xl  fixed z-10 w-full">
              <nav className=" flex justify-between w-11/12 mx-auto  px-8  pt-4  pb-8  ">
        <div>
            <Link to='/' className="btn btn-ghost font-bold text-xl"><img className="h-14" src={DevIMG} alt="" /></Link>
        </div>
        <ul className="hidden md:menu-horizontal menu  bg-gray-800 rounded-box items-center *:text-white *:font-semibold">
 {navOptions}
</ul>

<div className="md:hidden dropdown dropdown-end">
  <div tabIndex={0} role="button" className="btn btn-ghost m-1"><FaBars className="text-xl"/></div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
  {
    navOptions
  }
  </ul>
</div>

            </nav>
          </div>
       
    );
};

export default Navbar;