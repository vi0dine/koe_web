import React from 'react';
import logo from '../../logo_dark.svg';
import './Entry.styles.scss';
import SignUpForm from './components/SignUpForm/SignUpForm.component';

const EntryPage = () => {
    return (
        <div className={'EntryPage__container'}>
            <div className={'EntryPage__left__container'}>
                <div className={'Logo__container'}>
                    <img className={'Logo__img'} src={logo} alt={'logo'} />
                </div>
                <SignUpForm />
            </div>
            <div className={'EntryPage__right__container'}></div>
        </div>
    );
};

export default EntryPage;
