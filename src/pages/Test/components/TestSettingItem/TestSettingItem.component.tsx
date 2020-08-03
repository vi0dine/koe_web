import React from 'react';
import './TestSettingItem.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

type TestSettingItemProps = {
    label: string;
    value: boolean;
};

const TestSettingItem = ({ label, value }: TestSettingItemProps) => {
    return (
        <div className={'TestSettingItem__container'}>
            <FontAwesomeIcon
                className={`TestSettingItem__icon ${value ? 'enabled' : 'disabled'}`}
                icon={value ? faCheckCircle : faTimesCircle}
            />
            <span className={`TestSettingItem__label ${value ? 'enabled' : 'disabled'}`}>{label}</span>
        </div>
    );
};

export default TestSettingItem;
