import React from 'react';
import Category from './Category';
import TableRow from './TableRow';

function ContentOverview() {
    return (
        <main className='main-wrapper'>
            <div className='ps-lg-0'>
                <h2 className='text-4xl fw-bold color-palette-1 mb-30'>
                    Overview
                </h2>
                <div className='top-up-categories mb-30'>
                    <p className='text-lg fw-medium color-palette-1 mb-14'>
                        Top Up Categories
                    </p>
                    <div className='main-content'>
                        <div className='row'>
                            <Category
                                title='Desktop'
                                ovrviewImage='CtgDesk'
                                totspnt={180005000}
                            />
                            <Category
                                title='Mobile'
                                ovrviewImage='CtgMbl'
                                totspnt={8455000}
                            />
                            <Category
                                title='Categories'
                                ovrviewImage='CtgCtg'
                                totspnt={5000000}
                            />
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
                                    <th className='text-start' scope='col'>
                                        Game
                                    </th>
                                    <th scope='col'>Item</th>
                                    <th scope='col'>Price</th>
                                    <th scope='col'>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <TableRow
                                    title1='Mobile Legend'
                                    title2='Mobile'
                                    item={200}
                                    nominal={290000}
                                    status='pending'
                                    image='overview-1'
                                />
                                <TableRow
                                    title1='Call of Duty:Modern'
                                    title2='Desktop'
                                    item={550}
                                    nominal={740000}
                                    status='Success'
                                    image='overview-2'
                                />
                                <TableRow
                                    title1=' Clash of Clans'
                                    title2='Mobile'
                                    item={100}
                                    nominal={120000}
                                    status='Failed'
                                    image='overview-3'
                                />
                                <TableRow
                                    title1='The Royal Game'
                                    title2='Mobile'
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

export default ContentOverview;
