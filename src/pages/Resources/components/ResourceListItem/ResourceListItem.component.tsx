import React from 'react';
import moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf, faVideo, faTasks, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import './ResourceListItem.styles.scss';

type ResourceListItemProps = {
    id: number;
    name: string;
    courseName: string;
    resourceLink: string;
    resourceType: string;
    scheduledFor?: number;
    deadline?: number;
    minified?: boolean;
};

const ResourceListItem = ({
    id,
    name,
    courseName,
    resourceLink,
    resourceType,
    scheduledFor,
    deadline,
    minified = false,
}: ResourceListItemProps) => {
    const getIconByType = () => {
        switch (resourceType) {
            case 'PRESENTATION':
                return faFilePdf;
            case 'LIVE':
                return faVideo; // TODO: Change Icon
            case 'VIDEO':
                return faVideo;
            case 'EXERCISE':
                return faTasks;
            default:
                return faFileAlt;
        }
    };

    const getDatetimeInfo = () => {
        if (resourceType === 'LIVE') {
            return (
                <div className={'ResourceListItem__datetime__container'}>
                    <span className={'ResourceListItem__datetime__title'}>Scheduled for</span>
                    <span className={'ResourceListItem__datetime__date'}>
                        {moment(scheduledFor).format('DD/MM/YYYY HH:mm')}
                    </span>
                </div>
            );
        } else {
            return (
                <div className={'ResourceListItem__datetime__container'}>
                    <span className={'ResourceListItem__datetime__title'}>Deadline</span>
                    <span className={'ResourceListItem__datetime__date'}>
                        {moment(deadline).format('DD/MM/YYYY HH:mm')}
                    </span>
                </div>
            );
        }
    };

    return (
        <div className={`ResourceListItem__container ${minified ? 'minified' : ''}`}>
            <div className={'ResourceListItem__icon__container'}>
                <FontAwesomeIcon className={'ResourceListItem__icon'} icon={getIconByType()} />
            </div>
            {(resourceType === 'LIVE' || resourceType === 'EXERCISE') && getDatetimeInfo()}
            <div className={'ResourceListItem__info__container'}>
                <span className={'ResourceListItem__info__name'}>{name}</span>
                <span className={'ResourceListItem__info__course'}>Course: {courseName}</span>
            </div>
        </div>
    );
};

export default ResourceListItem;
