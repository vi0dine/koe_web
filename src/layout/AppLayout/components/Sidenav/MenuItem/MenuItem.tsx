import React from 'react';
import './MenuItem.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconLookup } from '@fortawesome/free-solid-svg-icons';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { push } from 'connected-react-router';

type MenuItemProps = { title: string; icon: IconLookup; to: string };

const MenuItem = ({ title, icon, to }: MenuItemProps) => {
    const dispatch = useDispatch();
    const pathname = useSelector((state: RootStateOrAny) => state.router.location.pathname);

    const navigateTo = () => {
        dispatch(push(to));
    };

    const isActive = (path: string) => {
        const subpath = to.substr(1, to.length);
        const reg = new RegExp(subpath);
        return (subpath.length && path.match(reg)) || path === to;
    };

    return (
        <>
            <div onClick={navigateTo} className={`menu-item ${isActive(pathname) ? 'active' : ''}`}>
                <div className={'menu-item__icon__container'}>
                    <FontAwesomeIcon className={'menu-item__icon'} icon={icon} />
                </div>
                <span className={'menu-item__text'}>{title}</span>
            </div>
            <svg width="0" height="0" viewBox="0 0 190 90" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <clipPath id={'menuItem'}>
                        <path
                            d="M0 45C0 32.5736 10.0736 22.5 22.5 22.5H153.781C153.781 22.5 147.844 22.5 171.891 23.1429C190 23.1429 190 0 190 0V90C190 90 190 67.2045 171.891 67.3714C153.781 67.5383 153.781 67.5 153.781 67.5H22.5C10.0736 67.5 0 57.4264 0 45V45Z"
                            fill="white"
                        />
                    </clipPath>
                </defs>
            </svg>
        </>
    );
};

export default MenuItem;
