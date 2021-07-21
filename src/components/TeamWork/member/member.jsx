import React, { useState } from 'react'
import ListMainMember from './listMainMember';
import { ListMember } from './listMember';
import './member.css';

export const Members = () => {

    const [mainMember, setMainMember] = useState([
        {
            img: "https://i.pinimg.com/originals/c2/70/b9/c270b9d69a7e434971345a454152c253.jpg",
            name: "Trà My",
            position: "Photographer",
        },
        {
            img: "https://i.pinimg.com/474x/2a/b8/01/2ab801264159a3cbf8ad881c7524f26e.jpg",
            name: "Trà My",
            position: "Leader",
        },
        {
            img: "https://nguoinoitieng.tv/images/nnt/101/1/bfof.jpg",
            name: "Trà My",
            position: "Web Designer",
        },
    ])

    const [members, setMemner] = useState([
        {
            img: "https://cdn.tgdd.vn//GameApp/1340221//Anhavatardoi57-800x800.jpg",
            name: "Trà My",
            word: "I will assist you in making a web",
        },
        {
            img: "https://cdn.tgdd.vn//GameApp/1340221//Anhavatardoi57-800x800.jpg",
            name: "Trà My",
            word: "I will support you in making Photographer",
        },
        {
            img: "https://cdn.tgdd.vn//GameApp/1340221//Anhavatardoi57-800x800.jpg",
            name: "Trà My",
            word: "what can you do for me",
        },
        {
            img: "https://cdn.tgdd.vn//GameApp/1340221//Anhavatardoi57-800x800.jpg",
            name: "Trà My",
            word: "",
        },
        {
            img: "https://cdn.tgdd.vn//GameApp/1340221//Anhavatardoi57-800x800.jpg",
            name: "Trà My",
            word: "",
        },
    ]);

    return (
        <div className="membersTW">
            <div className="main_member">
                {mainMember.map((list, index) => {
                    return (
                        <ListMainMember
                            img={list.img}
                            name={list.name}
                            position={list.position}
                        />
                    );
                })
                }
            </div>
            
            <div className="members">
                {members.map((list, index) => {
                    return (
                        <ListMember
                            img={list.img}
                            name={list.name}
                            word={list.word}
                        />
                    );
                })
                }
            </div>
        </div>
    )
}
