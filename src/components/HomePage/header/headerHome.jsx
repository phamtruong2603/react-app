import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './headerHome.css';

function HeaderHome() {
    const [navBar, setNavBar] = useState(false);

    const changBackground = () => {
        if (window.scrollY >= 30) {
            setNavBar(true);
        }
        else {
            setNavBar(false);
        }
    };

    window.addEventListener('scroll', changBackground);

    return (
        <div className="headerHome">
            <div className={navBar ? 'toolbarHome hiddenToolbarHome' : 'toolbarHome'}>
                <nav>
                    <ul className="homeNav homeToolbarNav">
                        <li>
                            <Link className="navLiHome" to="/">
                                <img src="https://freepikpsd.com/media/2019/10/letras-t-png-2-Transparent-Images.png" alt="" />
                            </Link>
                            <h2>Team Work</h2>
                        </li>
                    </ul>

                    <ul className="homeLog homeToolbarNav">
                        <li><Link className="login in" to="">Log in</Link></li>
                        <li><Link className="signin in" to="/signin">Sign in</Link></li>
                    </ul>
                </nav>
            </div>

            <div className="mainHeader">
                <div className="teamword">
                    <h1>TeamWork</h1>
                </div>
                <div className="dvantages">
                    <h1>SUPPORT YOUR TEAMWORK</h1>
                    <p>FAST, CONVENINE AND ORGANIZED</p>
                </div>
                <div className="helpHome">
                    <p>FREE APP FOR TEAMWORK</p>
                    <p><Link className="button">Help</Link></p>
                </div>
            </div>
        </div>
    );
}

export default HeaderHome;