import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItem =
        <>
            <li><Link to='/'>Home</Link></li>
            <li><a>Blogs</a></li>
            <li><a>Profile</a></li>
            <li><a>Skills</a></li>
            <li><a>Contact</a></li>
            <li><a>Login</a></li>
        </>
    return (
        <div className='bg-accent'>
            <div class="navbar px-8  mx-auto text-white">
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
                    <a class="btn btn-ghost normal-case text-xl"> MAIN UDDIN </a>
                </div>
                <div class="navbar-end hidden lg:flex">
                    <ul class="menu mx-left menu-horizontal text-xl p-0">
                        {
                            navItem
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;