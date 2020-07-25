import React, { ReactNode } from 'react';
import './EntryLayout.styles.scss';

type EntryLayoutProps = { children: ReactNode };

const EntryLayout = ({ children }: EntryLayoutProps) => {
    return <div>{children}</div>;
};

export default EntryLayout;
