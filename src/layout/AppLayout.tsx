import React, { ReactNode } from 'react';
import './AppLayout.styles.scss';
import Sidenav from './components/Sidenav/Sidenav';
import Topbar from './components/Topbar/Topbar';

type AppLayoutProps = { children: ReactNode };

const AppLayout = ({ children }: AppLayoutProps) => {
    return (
        <div className={'app-layout__container'}>
            <Sidenav />
            <div className={'app-layout__window'}>
                <Topbar />
                <div className={'app-layout__content'}>{children}</div>
            </div>
        </div>
    );
};

export default AppLayout;
