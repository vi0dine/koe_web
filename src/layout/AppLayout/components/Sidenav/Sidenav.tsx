import React from 'react';
import logo from '../../../../logo_light.svg';
import './Sidenav.styles.scss';
import MenuItem from './MenuItem/MenuItem';
import {
    faBookOpen,
    faCalendar,
    faChalkboardTeacher,
    faColumns,
    faDoorOpen,
    faQuestion,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { RootStateOrAny, useDispatch, useSelector } from 'react-redux';
import { collapseSidenav } from '../../../../store/App/App.actions';

const Sidenav = () => {
    const dispatch = useDispatch();
    const collapsed = useSelector((state: RootStateOrAny) => state.AppState.sidenavCollapsed);

    return (
        <div className={`sidenav__container ${collapsed ? 'collapsed' : ''}`}>
            <div
                onClick={() => dispatch(collapseSidenav(!collapsed))}
                className={`logo__container ${collapsed ? 'collapsed' : ''}`}
            >
                <img className={'logo__img'} alt={'logo'} src={logo} />
            </div>
            <div className={`menu__container ${collapsed ? 'collapsed' : ''}`}>
                <MenuItem to={'/'} icon={faColumns} title={'Dashboard'} />
                <MenuItem to={'/courses'} icon={faChalkboardTeacher} title={'Courses'} />
                <MenuItem to={'/tests'} icon={faQuestion} title={'Tests'} />
                <MenuItem to={'/resources'} icon={faBookOpen} title={'Resources'} />
                <MenuItem to={'/calendar'} icon={faCalendar} title={'Calendar'} />
            </div>
            <div className={`logout__container ${collapsed ? 'collapsed' : ''}`}>
                <div className={'logout__icon__container'}>
                    <FontAwesomeIcon className={'logout__icon'} icon={faDoorOpen} />
                </div>
                <span className={'logout__text'}>Logout</span>
            </div>
        </div>
    );
};

export default Sidenav;
