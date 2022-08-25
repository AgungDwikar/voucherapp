import React from 'react';
import BtnTab from './BtnTab';
import TableRow from './TableRow';

function TransactionContent() {
    return (
        <main className='main-wrapper'>
            <div className='ps-lg-0'>
                <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
                    My Transactions
                </h2>
                <div className='mb-30'>
                    <p className='text-lg color-palette-2 mb-12'>
                        You’ve spent
                    </p>
                    <h3 className='text-5xl fw-medium color-palette-1'>
                        Rp 4.518.000.500
                    </h3>
                </div>
                <div className='row mt-30 mb-20'>
                    <div className='col-lg-12 col-12 main-content'>
                        <div id='list_status_title'>
                            <BtnTab title='All Trx' active />
                            <BtnTab title='Succes' active />
                            <BtnTab title='Pending' />
                            <BtnTab title='Failed' />
                        </div>
                    </div>
                </div>
                <div className='latest-transaction'>
                    <p className='text-lg fw-medium color-palette-1 mb-14'>
                        Latest Transactions
                    </p>
                    <div className='main-content main-content-table overflow-auto'>
                        <table className='table table-borderless'>
                            <thead>
                                <tr className='color-palette-1'>
                                    <th className='' scope='col'>
                                        Game
                                    </th>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Status</th>
                                    <th scope='col'>Action</th>
                                </tr>
                            </thead>
                            <tbody id='list_status_item'>
                                <TableRow
                                    title='Mobile Legends: The New Battle
                                                2021'
                                    category='Mobile'
                                    item={200}
                                    nominal={290000}
                                    status='Pending'
                                    image='overview-1'
                                />
                                <TableRow
                                    title='Call of Duty:Modern'
                                    category=' Desktop'
                                    item={550}
                                    nominal={740000}
                                    status='Success'
                                    image='overview-2'
                                />
                                <TableRow
                                    title='Clash of Clans'
                                    category=' mobile'
                                    item={100}
                                    nominal={120000}
                                    status='Failed'
                                    image='overview-3'
                                />
                                <TableRow
                                    title='The Royal Game'
                                    category=' mobile'
                                    item={225}
                                    nominal={200000}
                                    status='Pending'
                                    image='overview-4'
                                />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default TransactionContent;