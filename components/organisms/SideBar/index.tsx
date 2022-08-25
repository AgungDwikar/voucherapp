import React from 'react';
import Footer from './Footer';
import MenuItem from './MenuItem';
import Profile from './Profile';

interface SideBarProps {
    activeMenu: 'overview' | 'transactions' | 'settings';
}

function SideBar(props: SideBarProps) {
    const { activeMenu } = props;
    return (
        <section className='sidebar'>
            <div className='content pt-50 pb-30 ps-30'>
                <Profile />
                <div className='menus'>
                    <MenuItem
                        title='Overview'
                        icon='IconMenuOverview'
                        active={activeMenu === 'overview'}
                        href='/member'
                    />
                    <MenuItem
                        title='Transaction'
                        icon='IcMenuTr'
                        active={activeMenu === 'transactions'}
                        href='/member/transactions'
                    />
                    <MenuItem title='Message' icon='IcMenuMsg' href='/member' />
                    <MenuItem title='Cards' icon='IcMenuCrd' href='/member' />
                    <MenuItem title='Reward' icon='IcMenuRw' href='/member' />
                    <MenuItem
                        title='Settings'
                        icon='IcMenuSt'
                        active={activeMenu === 'settings'}
                        href='/member/edit-profile'
                    />
                    <MenuItem title='Log Out' icon='IcMenuLg' href='/sign-in' />
                </div>
                <Footer />
            </div>
        </section>
    );
}

export default SideBar;
