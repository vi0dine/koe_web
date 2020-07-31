import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Topbar.styles.scss';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { useDispatch } from 'react-redux';
import { toggleDock } from '../../../../store/App/App.actions';

const Topbar = () => {
    const dispatch = useDispatch();
    return (
        <div className={'topbar__container'}>
            <div className={'notifications__container'}>
                <FontAwesomeIcon className={'notifications__icon'} icon={faBell} />
                <div className={'badge__container'}>
                    <span className={'badge__counter'}>25</span>
                </div>
            </div>
            <div className={'account__container'} onClick={() => dispatch(toggleDock())}>
                <div className={'name__container'}>
                    <span className={'name__text'}>Kamil Mazurek</span>
                </div>
                <div className={'dropdown__container'}>
                    <FontAwesomeIcon className={'dropdown__icon'} icon={faChevronDown} />
                </div>
            </div>
        </div>
    );
};

export default Topbar;
