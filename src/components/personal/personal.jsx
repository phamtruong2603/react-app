import React from 'react';
import './personal.css';
import NavPersonal from './NavPerson/NavPersonal';
import HeaderPersonal from './headerPersonal/headerPersonal';
import ContentPersonal from './contentPersonal/contentPersonal';

function Personal() {
    return (
        <div>
            <HeaderPersonal />
            <div className="content">
                <NavPersonal />
                <ContentPersonal />
            </div>
        </div>
    );
}

export default Personal;