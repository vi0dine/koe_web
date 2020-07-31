import React from 'react';
import './RemindersBox.styles.scss';

const RemindersBox = () => {
    return (
        <div className={'RemindersBox__container'}>
            <span className={'RemindersBox__title'}>Reminders</span>
            <div className={'RemindersBox__reminders'}></div>
        </div>
    );
};

export default RemindersBox;
