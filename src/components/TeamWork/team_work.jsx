import React from 'react';

import { HeaderTeamWork } from './header/headerTeamWork';
import { Members } from './member/member';

function TeamWork() {
    return (
        <div className="teamWork">
            <HeaderTeamWork />
            <Members />
        </div>
    );
}

export default TeamWork;