import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import './ProfileDock.styles.scss';
import { useDispatch } from 'react-redux';
import { toggleDock } from '../../../../store/App/App.actions';
import RemindersBox from './components/RemindersBox/RemindersBox.component';
import ActivitiesBox from './components/ActivitiesBox/ActivitiesBox.component';

const ProfileDock = () => {
    const dispatch = useDispatch();

    const avatarUri = 'https://randomuser.me/api/portraits/men/12.jpg';
    const userFullName = 'Kamil Mazurek';
    const userID = '293031';
    const userRole = 'Student';
    const userCourse = 'ISSP';

    return (
        <div className={'ProfileDock'}>
            <div className={'ProfileDock__info__container'}>
                <div className={'ProfileDock__closeIcon__container'}>
                    <FontAwesomeIcon
                        onClick={() => dispatch(toggleDock())}
                        className={'ProfileDock__closeIcon__icon'}
                        icon={faTimes}
                    />
                </div>
                <div className={'ProfileDock__moreIcon__container'}>
                    <FontAwesomeIcon className={'ProfileDock__moreIcon__icon'} icon={faEllipsisV} />
                </div>
                <div className={'ProfileDock__avatar__container'}>
                    <div className={'ProfileDock__avatar__img'} style={{ backgroundImage: `url(${avatarUri})` }} />
                    <span className={'ProfileDock__avatar__fullname'}>{userFullName}</span>
                    <span className={'ProfileDock__avatar__id'}>{userID}</span>
                    <span className={'ProfileDock__avatar__course'}>
                        {userRole} at {userCourse}
                    </span>
                </div>
                <div className={'ProfileDock__divider'} />
            </div>
            <ActivitiesBox />
            <RemindersBox />
        </div>
    );
};

export default ProfileDock;
