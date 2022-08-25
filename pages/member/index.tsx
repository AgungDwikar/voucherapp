import React from 'react';
import ContentOverview from '../../components/organisms/ContentOverview';
import SideBar from '../../components/organisms/SideBar';

function Member() {
    return (
        <section className='overview overflow-auto'>
            <SideBar activeMenu='overview' />
            <ContentOverview />
        </section>
    );
}

export default Member;
