import React from 'react';
import './ActivitiesBox.styles.scss';

const ActivitiesBox = () => {
    return (
        <div className={'ActivitiesBox__container'}>
            <span className={'ActivitiesBox__title'}>Recent Activities</span>
            <div className={'ActivitiesBox__activities'}></div>
        </div>
    );
};

export default ActivitiesBox;
