import React from 'react'
import { Link } from 'react-router-dom'
import './headerPersonal.css'
import { BiSearch } from "react-icons/bi";

const HeaderPersonal = () => {
    return (
        <div className="mainHeaderPersonal">
            <div className="headerPersonal">
                <div className="logoPersonal">
                    <Link><img src="https://freepikpsd.com/media/2019/10/letras-t-png-2-Transparent-Images.png" alt="" /></Link>
                    <h2>Team Word</h2>
                </div>
                <div className="searchPersonal">
                    <form action="">
                    <input type="search" name="search" placeholder="Search" />
                    <button type="submit"><BiSearch /></button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default HeaderPersonal
