import React from 'react';
import ContentOverview from '../../components/organisms/ContentOverview';
import SideBar from '../../components/organisms/SideBar';

function Member() {
    return (
        <section className='overview overflow-auto'>
            <SideBar />
            <ContentOverview />
        </section>
    );
}

export default Member;
