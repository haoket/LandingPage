import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/img/logo.jfif';

import '../Style/Navbar.scss';
import BarMB from '../assets/icon/Menu.png';
import CloseBar from '../assets/icon/Close.png';

export const Navbar = () => {
    const [showNav, setShowNavMB] = useState(false);
    const [fixed, setFixed] = useState(false)
    function setFix() {
        if (window.scrollY >= 90) {
            setFixed(true);

        } else {
            setFixed(false)
        }

    }

    window.addEventListener("scroll", setFix)
    return (
        <>
            <div className={fixed ? "Nav Fixed" : "Nav"}>
                <div className='Logo'>
                    <img src={Logo} alt="" />
                </div>


                <ul className={!showNav ? "navLinksc" : "NavMB"}
                    onClick={() => setShowNavMB(false)}>
                    <li>
                        <NavLink to='/'>
                            Introduce
                        </NavLink>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                        <NavLink to='/product'>
                            Product
                        </NavLink>
                        <NavLink to='/documents'>
                            Documents
                        </NavLink>
                        <NavLink to='/contact'>
                            Contact
                        </NavLink>
                    </li>

                </ul>

                <div
                    className={!showNav ? "Navbutton" : "NavBtnMB"}
                    onClick={() => setShowNavMB(false)}>
                    <button>Đăng nhập</button>
                    <button>Đăng ký</button>
                </div>


                {/* mobile navbar */}
                <div className='barMobile' onClick={() => setShowNavMB(!showNav)}>
                    {!showNav ? (
                        <img src={BarMB}></img>
                    ) : (

                        <img src={CloseBar}></img>
                    )}
                </div>


            </div>


        </>
    )
}
