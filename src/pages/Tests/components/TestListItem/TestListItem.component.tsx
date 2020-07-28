import React from 'react';
import './TestListItem.styles.scss';
import moment from 'moment';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';

type TestListItemProps = {
    id: number;
    title: string;
    courseName: string;
    isOpen: boolean;
    openTimestamp: number;
};

const TestListItem = ({ id, title, courseName, isOpen, openTimestamp }: TestListItemProps) => {
    const dispatch = useDispatch();
    return (
        <div
            onClick={() => {
                dispatch(push(`/tests/${id}`));
            }}
            className={`TestListItem__container ${isOpen ? '' : 'disabled'}`}
        >
            <div className={'TestListItem__info'}>
                <span className={'TestListItem__info__title'}>{title}</span>
                <span className={'TestListItem__info__subtitle'}>Course: {courseName}</span>
            </div>
            <div className={'TestListItem__button'}>
                {!isOpen && openTimestamp ? (
                    <div className={'TestListItem__locked__container'}>
                        <span className={'TestListItem__locked__title'}>Locked until</span>
                        <span className={'TestListItem__locked__date'}>
                            {moment(openTimestamp).format('DD/MM/YYYY HH:mm')}
                        </span>
                    </div>
                ) : (
                    <div className={'TestListItem__start'}>JOIN</div>
                )}
            </div>
        </div>
    );
};

export default TestListItem;
