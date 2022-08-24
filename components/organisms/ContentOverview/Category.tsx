import Image from 'next/image';
import React from 'react';

interface CategoryProps {
    title: string;
    ovrviewImage: 'CtgDesk' | 'CtgMbl' | 'CtgCtg';
    totspnt: number;
}

function Category(props: CategoryProps) {
    const { title, ovrviewImage, totspnt } = props;
    return (
        <div className='col-lg-4 ps-15 pe-15 pb-lg-0 pb-4'>
            <div className='categories-card'>
                <div className='d-flex align-items-center mb-24'>
                    <Image
                        src={`/icon/${ovrviewImage}.svg`}
                        alt='categoryimage'
                        width={60}
                        height={60}
                    />
                    <p className='color-palette-1 mb-0 ms-12'>
                        Game
                        <br /> {title}
                    </p>
                </div>
                <div>
                    <p className='text-sm color-palette-2 mb-1'>Total Spent</p>
                    <p className='text-2xl color-palette-1 fw-medium m-0'>
                        {totspnt}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Category;
