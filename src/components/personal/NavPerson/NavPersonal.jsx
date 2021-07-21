import React, { useContext } from 'react';

import './NavPersonal.css';
import { FaFacebookF } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { mainProviders } from '../../contextAPI/Provider';

function NavPersonal() {
    const onClick = () => {

    }
    const { dataPersonal } = useContext(mainProviders);

    return (
        <div className="NavPersonal">
            <div className="avatar_personal"><img src={dataPersonal.img} alt="" /></div>
            <div>
                <ul className="information information_personal">
                    <li>{dataPersonal.name}</li>
                    <li>ID: {dataPersonal.ID}</li>
                </ul>
                <ul className="Social_Network information">
                    <li className="facebook" onClick={onClick()}><FaFacebookF /> Facebook</li>
                    <li className="email" onClick={onClick()}><AiFillMail /> Gmail</li>
                </ul>
            </div>
            <div>
                <ul className="related_information">
                    <li>Team Word</li>
                    <li>Chat</li>
                    <li>Sửa đổi thông tin</li>
                </ul>
            </div>
        </div>
    );
}

export default NavPersonal;