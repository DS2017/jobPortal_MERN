import { useEffect } from 'react';
import logo from '../assets/logo.png';
import { Outlet, NavLink, useNavigate } from 'react-router-dom'


const Header = () => {

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/')
    }

    return (
        <>

            <header className="fixed w-full">
                <nav className="bg-white border-gray-200 py-2.5 dark:bg-gray-900">
                    <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                        <img src={logo} alt="Venue Logo" />

                        <div className="items-center justify-between hidden w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <NavLink to='/' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                } aria-current="page">Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/company' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Company</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/Jobs' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Jobs</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/contacts' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Contacts</NavLink>
                                </li>
                                {
                                    auth ?
                                        <>
                                            <li>
                                                <NavLink to='/addnewjobs' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Create Jobs</NavLink>
                                            </li>
                                            <li>
                                                <NavLink onClick={logout} to='/' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Logout ({JSON.parse(auth).username})</NavLink>
                                            </li>
                                        </>
                                        :
                                        <>
                                            <li>
                                                <NavLink to='/signup' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Sign Up</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to='/login' className={({isActive}) =>
                                    isActive 
                                    ? "block py-2 pl-3 pr-4 text-white bg-sky-500 rounded lg:bg-transparent lg:text-blue-500 lg:p-0 dark:text-white"
                                    : "block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-500 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
                                }>Login</NavLink>
                                            </li>
                                        </>
                                }


                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

            {/* <div>
        <img src={logo} alt="Venue Logo"/>            
        </div>
            <div className="topnav" id="myTopnav">
              <a href="#home" className="active">Home</a>
              <a href="#news">News</a>
              <a href="#contact">Contact</a>
              <div className="dropdown">
                <button className="dropbtn">Dropdown 
                  <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                  <a href="#">NavLink 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div> 
              <a href="#about">About</a>
              <a href="#">&#9776;</a>
            </div> */}
            <Outlet />

        </>

    )
}

export default Header