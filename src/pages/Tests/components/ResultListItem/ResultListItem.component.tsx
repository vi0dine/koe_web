import React from 'react';
import moment from 'moment';
import './ResultListItem.styles.scss';

type ResultListItemProps = {
    id: number;
    title: string;
    takenAt: number;
    approvedBy: { id: number; name: string };
    points: number;
    maxPoints: number;
    isPassed: boolean;
};

const ResultListItem = ({ id, title, takenAt, approvedBy, points, maxPoints, isPassed }: ResultListItemProps) => {
    return (
        <div className={`ResultListItem__container ${isPassed ? 'passed' : 'failed'}`}>
            <div className={'ResultListItem__info'}>
                <span className={'ResultListItem__title'}>{title}</span>
                <span className={'ResultListItem__takenAt'}>
                    Taken at: {moment(takenAt).format('DD/MM/YYYY HH:mm')}
                </span>
                <span className={'ResultListItem__approvedBy'}>Approved by: {approvedBy.name}</span>
            </div>
            <div className={'ResultListItem__results'}>
                <div className={'ResultListItem__results__container'}>
                    <span className={'ResultListItem__results__points'}>{points}</span>
                    <span className={'ResultListItem__results__divider'} />
                    <span className={'ResultListItem__results__maxPoints'}>{maxPoints}</span>
                </div>
            </div>
            <div className={'ResultListItem__percentage__container'}>
                <span className={'ResultListItem__percentage__points'}>{Math.round((points / maxPoints) * 100)} %</span>
            </div>
        </div>
    );
};

export default ResultListItem;
