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
        {
            id: 5,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 6,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 7,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'PRESENTATION',
            scheduledFor: null,
            deadline: null,
        },
    ];
    const mockLives = [
        {
            id: 1,
            name: 'Kości i kosteczki',
            courseName: 'Anatomia 1',
            resourceLink: 'Kości i kosteczki.pdf',
            resourceType: 'LIVE',
            scheduledFor: Date.now(),
            deadline: null,
        },
        {
            id: 2,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'LIVE',
            scheduledFor: Date.now(),
            deadline: null,
        },
        {
            id: 3,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'LIVE',
            scheduledFor: Date.now(),
            deadline: null,
        },
        {
            id: 4,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'LIVE',
            scheduledFor: Date.now(),
            deadline: null,
        },
        {
            id: 5,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'LIVE',
            scheduledFor: Date.now(),
            deadline: null,
        },
    ];
    const mockVideos = [
        {
            id: 1,
            name: 'Kości i kosteczki',
            courseName: 'Anatomia 1',
            resourceLink: 'Kości i kosteczki.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 2,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 3,
            name: 'Ścięgna i ścięgienka',
            courseName: 'Anatomia 1',
            resourceLink: 'Ścięgna i ścięgienka.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 4,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 5,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 6,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'VIDEO',
            scheduledFor: null,
            deadline: null,
        },
    ];
    const mockExercises = [
        {
            id: 1,
            name: 'Kości i kosteczki',
            courseName: 'Anatomia 1',
            resourceLink: 'Kości i kosteczki.pdf',
            resourceType: 'EXERCISE',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 2,
            name: 'Mięśnie i mięsiwa',
            courseName: 'Anatomia 1',
            resourceLink: 'Mięśnie i mięsiwa.pdf',
            resourceType: 'EXERCISE',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 3,
            name: 'Ścięgna i ścięgienka',
            courseName: 'Anatomia 1',
            resourceLink: 'Ścięgna i ścięgienka.pdf',
            resourceType: 'EXERCISE',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 4,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'EXERCISE',
            scheduledFor: null,
            deadline: null,
        },
        {
            id: 5,
            name: 'Żyły i żyłki',
            courseName: 'Anatomia 1',
            resourceLink: 'Żyły i żyłki.pdf',
            resourceType: 'EXERCISE',
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
                <div className={'ResourcesPage__lives'}>
                    {mockLives.map((live) => {
                        return (
                            <ResourceListItem
                                key={live.id}
                                id={live.id}
                                name={live.name}
                                courseName={live.courseName}
                                resourceLink={live.resourceLink}
                                resourceType={live.resourceType}
                            />
                        );
                    })}
                </div>
            </div>
            <div className={'ResourcesPage__column'}>
                <span className={'ResourcesPage__title'}>Videos</span>
                <div className={'ResourcesPage__videos'}>
                    {mockVideos.map((video) => {
                        return (
                            <ResourceListItem
                                key={video.id}
                                id={video.id}
                                name={video.name}
                                courseName={video.courseName}
                                resourceLink={video.resourceLink}
                                resourceType={video.resourceType}
                            />
                        );
                    })}
                </div>
                <span className={'ResourcesPage__title'}>Exercises</span>
                <div className={'ResourcesPage__exercises'}>
                    {mockExercises.map((exercise) => {
                        return (
                            <ResourceListItem
                                key={exercise.id}
                                id={exercise.id}
                                name={exercise.name}
                                courseName={exercise.courseName}
                                resourceLink={exercise.resourceLink}
                                resourceType={exercise.resourceType}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ResourcesPage;
