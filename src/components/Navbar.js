import './Navbar.css'
import './util.css'
import React from 'react'
import logo from './images/pngegg.png'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {
    return (
        <navbar className="navbar container" >
            <i className='icon'>
                <img className="logo " src={logo} alt='image' />
            </i>
            <ul>
                <li>
                    <a className='navbar__link links' src="#home">
                        Home
                    </a>
                </li>
                <li>
                    <a className='navbar__link links' src="#contact">
                        Contact
                    </a>
                </li>
                <li>
                    {/* <FontAwesomeIcon className='icon' style={{ color: '#cbd5e1' }} icon={faSearch} /> */}
                    <input placeholder='🔎︎' className='navbar__input rounded-md ml-3' />
                </li>
                <li className='navbar__line'></li>
                <li>
                    <button>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                        </svg>
                    </button>
                </li>
            </ul>
            <button className='navbar__hamburger'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="hamburger">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </button>
        </navbar>
    )
}

export default Navbar