import React, { ReactNode } from 'react';
import './AppLayout.styles.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Topbar from './components/Topbar/Topbar';
import ProfileDock from './components/ProfileDock/ProfileDock.component';
import { RootStateOrAny, useSelector } from 'react-redux';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

type AppLayoutProps = { children: ReactNode };

const AppLayout = ({ children }: AppLayoutProps) => {
    const dockOpened = useSelector((state: RootStateOrAny) => state.AppState.dockOpened);

    return (
        <div className={'app-layout__container'}>
            <Sidenav />
            <div className={'app-layout__window'}>
                <Topbar />
                <div className={'app-layout__content'}>{children}</div>
            </div>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={dockOpened}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                    classNames="dock-slide"
                >
                    <>{dockOpened && <ProfileDock />}</>
                </CSSTransition>
            </SwitchTransition>
        </div>
    );
};

export default AppLayout;
