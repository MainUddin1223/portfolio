import aos from 'aos';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';


const Header = () => {
    aos.init();
    const navItem =
        <>
            <li> <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold'
                }
            >
                Home
            </NavLink></li>
            <li> <NavLink
                to="/projects"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold'
                }
            >
                Projects
            </NavLink></li>
            <li> <NavLink
                to="/skills"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold'
                }
            >
                Skills
            </NavLink></li>
            <li> <NavLink
                to="/services"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold '
                }
            >
                Services
            </NavLink></li>
            <li> <NavLink
                to="/about"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold'
                }
            >
                About
            </NavLink></li>
            <li> <NavLink
                to="/contact"
                className={({ isActive }) =>
                    isActive && 'bg-sky-900 font-bold '
                }
            >
                Contact
            </NavLink></li>

        </>
    return (
        <div className="sticky z-50 top-0">
            <div className='bg-black py-4 font-serif '
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="5500">
                <div class="navbar w-3/4  mx-auto text-white">
                    <div class="navbar-start">
                        <div class="dropdown">
                            <label tabindex="0" class="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </label>
                            <ul tabindex="0" class="menu menu-compact dropdown-content  mt-3 p-2 shadow font-xl bg-accent rounded-box w-52">
                                {
                                    navItem
                                }
                            </ul>
                        </div>
                        <a class="btn btn-ghost normal-case md:text-4xl text-2xl"> MAIN UDDIN </a>
                    </div>
                    <div class="navbar-end hidden lg:flex"
                    >

                        <ul class="menu mx-left menu-horizontal text-xl p-0">
                            {
                                navItem
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;