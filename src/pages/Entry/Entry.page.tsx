import React, { useState } from 'react';
import logo from '../../logo_dark.svg';
import './Entry.styles.scss';
import SignUpForm from './components/SignUpForm/SignUpForm.component';
import Carousel from '../../shared/components/Carousel/Carousel.component';
import Slide1 from './components/CarouselSlides/Slide1';
import Slide2 from './components/CarouselSlides/Slide2';
import SignInForm from './components/SignInForm/SignInForm.component';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import ForgottenPasswordForm from './components/ForgottenPasswordForm/ForgottenPasswordForm.component';
import Slide3 from './components/CarouselSlides/Slide3';

const EntryPage = () => {
    const [activeForm, setActiveForm] = useState('signIn');
    const carouselSlides = [<Slide1 key={'1'} />, <Slide2 key={'2'} />, <Slide3 key={'3'} />];

    const renderForm = (form: string) => {
        switch (form) {
            case 'signIn':
                return <SignInForm onFormChange={(form) => setActiveForm(form)} />;
            case 'signUp':
                return <SignUpForm onFormChange={(form) => setActiveForm(form)} />;
            case 'forgot':
                return <ForgottenPasswordForm onFormChange={(form) => setActiveForm(form)} />;
            default:
                return <SignInForm onFormChange={(form) => setActiveForm(form)} />;
        }
    };

    return (
        <div className={'EntryPage__container'}>
            <div className={'EntryPage__left__container'}>
                <div className={'Logo__container'}>
                    <img className={'Logo__img'} src={logo} alt={'logo'} />
                </div>
                <SwitchTransition mode={'out-in'}>
                    <CSSTransition
                        key={activeForm}
                        addEndListener={(node, done) => {
                            node.addEventListener('transitionend', done, false);
                        }}
                        classNames="fade-slide"
                    >
                        {renderForm(activeForm)}
                    </CSSTransition>
                </SwitchTransition>
            </div>
            <div className={'EntryPage__right__container'}>
                <Carousel slides={carouselSlides} interval={5000} />
            </div>
        </div>
    );
};

export default EntryPage;
