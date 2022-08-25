import React from 'react';

interface RowProps {
    label: string;
    value: string | number;
}

function Row(props: RowProps) {
    const { label, value } = props;
    return (
        <p className='text-lg color-palette-1 mb-20'>
            {label} <span className='purchase-details'>{value}</span>
        </p>
    );
}

export default Row;
