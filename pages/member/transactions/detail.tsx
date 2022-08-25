import React from 'react';
import SideBar from '../../../components/organisms/SideBar';
import TransactionDetailContent from '../../../components/organisms/TransactionDetailContent';

function Detail() {
    return (
        <section className='transactions-detail overflow-auto'>
            <SideBar activeMenu='transactions' />
            <TransactionDetailContent />
        </section>
    );
}

export default Detail;
