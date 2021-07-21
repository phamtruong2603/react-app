import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { AiTwotoneMail } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";

export const ListMember = (props) => {
    return (
        <div className="listMember">
            <div className="position">
                <div className="img">
                    <img src={props.img} alt="" />
                </div>
                <ul>
                    <li><FaFacebook /></li>
                    <li><AiTwotoneMail /></li>
                    <li><AiFillTwitterCircle /></li>
                </ul>
            </div>
            <div className="IF_member">
                <p className="name">{props.name}</p>
                <p>Members of the group</p>
                <p>{props.word}</p>
            </div>
        </div>
    )
}
