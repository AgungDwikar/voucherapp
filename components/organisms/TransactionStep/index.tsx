import React from 'react';
import StepItem from './StepItem';

function TransactionStep() {
    return (
        <section id='feature' className='feature pt-50 pb-50'>
            <div className='container-fluid'>
                <h2 className='text-4xl fw-bold color-palette-1 text-center mb-30'>
                    It’s Really That
                    <br /> Easy to Win the Game
                </h2>
                <div className='row gap-lg-0 gap-4' data-aos='fade-up'>
                    <StepItem
                        icon='step1'
                        title='1. Start'
                        desc1='pilih salah satu game'
                        desc2=' yang ingin kamu topup'
                    />
                    <StepItem
                        icon='step2'
                        title='2. Fill Up'
                        desc1='Tp Up sesuai dengan'
                        desc2=' nominal yang tersedia'
                    />
                    <StepItem
                        icon='step3'
                        title='3. Be a winner'
                        desc1='siap digunakan untuk'
                        desc2='improve permainan kamu'
                    />
                </div>
            </div>
        </section>
    );
}

export default TransactionStep;
