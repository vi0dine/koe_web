import React from 'react';
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
};

const ResourceListItem = ({
    id,
    name,
    courseName,
    resourceLink,
    resourceType,
    scheduledFor,
    deadline,
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

    return (
        <div className={'ResourceListItem__container'}>
            <div className={'ResourceListItem__icon__container'}>
                <FontAwesomeIcon className={'ResourceListItem__icon'} icon={getIconByType()} />
            </div>
            <div></div>
            <div className={'ResourceListItem__info__container'}>
                <span className={'ResourceListItem__info__name'}>{name}</span>
                <span className={'ResourceListItem__info__course'}>Course: {courseName}</span>
            </div>
        </div>
    );
};

export default ResourceListItem;
