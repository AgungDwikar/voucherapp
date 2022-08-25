import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
    title: string;
    icon:
        | 'IconMenuOverview'
        | 'IcMenuCrd'
        | 'IcMenuLg'
        | 'IcMenuRw'
        | 'IcMenuSt'
        | 'IcMenuTr'
        | 'IcMenuMsg';
    active?: boolean;
    href: string;
}

function MenuItem(props: Partial<MenuItemProps>) {
    const { title, icon, active, href } = props;
    const ClassItem = cx({
        item: true,
        'mb-3': true,
        active: active,
    });

    return (
        <div className={ClassItem}>
            <div className='me-3'>
                <Image
                    src={`/icon/${icon}.svg`}
                    alt='menuIcon'
                    width={25}
                    height={25}
                />
            </div>

            <p className='item-title m-0'>
                <Link href={href}>
                    <a className='text-lg text-decoration-none'>{title}</a>
                </Link>
            </p>
        </div>
    );
}

export default MenuItem;
