import React from 'react';
import { Link } from 'react-router-dom';
import './headerTeamwork.css';
import { BiSearch } from "react-icons/bi";

export const HeaderTeamWork = () => {
    return (
        <div className="mainHeaderTeamWork">
            <div className="headerTeamWork">
                <div className="logoTeamWork">
                    <Link><img src="https://freepikpsd.com/media/2019/10/letras-t-png-2-Transparent-Images.png" alt="" /></Link>
                    <h2>Team Work</h2>
                </div>
                <div className="searchTeamWork">
                    <form action="">
                    <input type="search" name="search" placeholder="Search" />
                    <button type="submit"><BiSearch /></button>
                    </form>
                </div>
            </div>
        </div>

    )
}
