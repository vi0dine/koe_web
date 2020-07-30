import React from 'react';
import './Resources.styles.scss';
import ResourceListItem from './components/ResourceListItem/ResourceListItem.component';

const ResourcesPage = () => {
    const mockPresentations = [
        {
            id: 1,
            name: 'Kości i kosteczki',
            courseName: 'Anatomia 1',
            resourceLink: 'Kości i kosteczki.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 2,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 3,
            name: 'Ścięgna i ścięgienka',
            courseName: 'Anatomia 1',
            resourceLink: 'Ścięgna i ścięgienka.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 4,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
    ];

    return (
        <div className={'ResourcesPage__container'}>
            <div className={'ResourcesPage__column'}>
                <span className={'ResourcesPage__title'}>Transcripts / Presentations</span>
                <div className={'ResourcesPage__presentations'}>
                    {mockPresentations.map((prez) => {
                        return (
                            <ResourceListItem
                                key={prez.id}
                                id={prez.id}
                                name={prez.name}
                                courseName={prez.courseName}
                                resourceLink={prez.resourceLink}
                                resourceType={prez.resourceType}
                            />
                        );
                    })}
                </div>
                <span className={'ResourcesPage__title'}>Live Webinars</span>
                <div className={'ResourcesPage__lives'}></div>
            </div>
            <div className={'ResourcesPage__column'}>
                <span className={'ResourcesPage__title'}>Videos</span>
                <div className={'ResourcesPage__videos'}></div>
                <span className={'ResourcesPage__title'}>Exercises</span>
                <div className={'ResourcesPage__exercises'}></div>
            </div>
        </div>
    );
};

export default ResourcesPage;
