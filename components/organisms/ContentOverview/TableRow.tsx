import Image from 'next/image';
import React from 'react';

interface TbRowProps {
    title1: string;
    title2: string;
    item: number;
    nominal: number;
    status: string;
    image: string;
}
function TableRow(props: TbRowProps) {
    const { title1, title2, item, nominal, status, image } = props;
    return (
        <tr className='align-middle'>
            <th scope='row'>
                <img
                    className='float-start me-3 mb-lg-0 mb-3'
                    src={`/img/${image}.png`}
                    width={80}
                    height={60}
                    alt=''
                />
                <div className='game-title-header'>
                    <p className='game-title fw-medium text-start color-palette-1 m-0'>
                        {title1}
                    </p>
                    <p className='text-xs fw-normal text-start color-palette-2 m-0'>
                        {title2}
                    </p>
                </div>
            </th>
            <td>
                <p className='fw-medium color-palette-1 m-0'>{item} Gold</p>
            </td>
            <td>
                <p className='fw-medium text-start color-palette-1 m-0'>
                    {nominal}
                </p>
            </td>
            <td>
                <div>
                    <span className='float-start icon-status pending'></span>
                    <p className='fw-medium text-start color-palette-1 m-0 position-relative'>
                        {status}
                    </p>
                </div>
            </td>
        </tr>
    );
}

export default TableRow;
