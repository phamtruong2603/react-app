import React from 'react';

const ListMainMember = (props) => {
    return (
        <div className="listMainMember">
            <div className="img">
                <img src={props.img} alt="" />
            </div>
            <div className="imfomation_member">
                <p>{props.name}</p>
                <p>{props.position}</p>
            </div>
        </div>
    )
}

export default ListMainMember;
