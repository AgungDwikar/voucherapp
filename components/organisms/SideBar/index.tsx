import React from 'react';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

function SideBar() {
    return (
        <section className='sidebar'>
            <div className='content pt-50 pb-30 ps-30'>
                <Profile />
                <div className='menus'>
                    <MenuItem title='Overview' icon='IconMenuOverview' active />
                    <MenuItem title='Transaction' icon='IcMenuTr' />
                    <MenuItem title='Message' icon='IcMenuMsg' />
                    <MenuItem title='Cards' icon='IcMenuCrd' />
                    <MenuItem title='Reward' icon='IcMenuRw' />
                    <MenuItem title='Settings' icon='IcMenuSt' />
                    <MenuItem title='Log Out' icon='IcMenuLg' />
                </div>
                <Footer />
            </div>
        </section>
    );
}

export default SideBar;
