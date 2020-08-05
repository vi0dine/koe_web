import React from 'react';
import moment from 'moment';
import './Test.styles.scss';
import TestInfoBox from './components/TestInfoBox/TestInfoBox.component';
import CriteriaBox from './components/CriteriaBox/CriteriaBox.component';
import ResourceListItem from '../Resources/components/ResourceListItem/ResourceListItem.component';
import StatsBox from './components/StatsBox/StatsBox.component';
import { push } from 'connected-react-router';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';

const TestPage = () => {
    const mockTest = {
        id: 1,
        name: 'Anatomia dla idiotów cz. 1',
        course: {
            id: 10,
            name: 'Anatomia 1',
        },
        testType: 'EXAM',
        authors: [
            { id: 32, name: 'Joanna Czaja' },
            { id: 21, name: 'Cezary Juszczak' },
        ],
        openTimestamp: Date.now(),
        isOpen: false,
        maxPoints: 50,
        criteria: [
            { grade: '2.0', from: 0, to: 20 },
            { grade: '3.0', from: 21, to: 50 },
            { grade: '3.5', from: 51, to: 70 },
            { grade: '4.0', from: 71, to: 80 },
            { grade: '4.5', from: 81, to: 90 },
            { grade: '5.0', from: 91, to: 100 },
        ],
        settings: {
            isMultiAnswerable: true,
            isShuffled: true,
            isWeighted: false,
            isChangeable: true,
            isMonitorable: false,
            timeLimit: {
                type: 'PER_TEST',
                value: 5600,
            },
            immediateResults: true,
            liveStats: false,
        },
        relatedResources: [
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
                id: 5,
                name: 'Mięśnie i mięsiwa',
                courseName: 'Anatomia 1',
                resourceLink: 'Mięśnie i mięsiwa.pdf',
                resourceType: 'LIVE',
                scheduledFor: Date.now(),
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
        ],
    };
    const { id } = useParams();
    const dispatch = useDispatch();

    return (
        <div className={'TestPage__container'}>
            <div className={'TestPage__test'}>
                <div className={'TestPage__info'}>
                    <span className={'TestPage__info__title'}>{mockTest.name}</span>
                    <TestInfoBox
                        type={mockTest.testType}
                        course={mockTest.course}
                        authors={mockTest.authors}
                        settings={mockTest.settings}
                    />
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <CriteriaBox maxPoints={mockTest.maxPoints} criteria={mockTest.criteria} />
                        <div style={{ display: 'flex', flex: 2, flexDirection: 'column' }}>
                            {mockTest.isOpen ? (
                                <div className={'TestPage__time__container'}>
                                    <span className={'TestPage__time__title'}>Test opened at:</span>
                                    <span className={'TestPage__time__date'}>
                                        {moment(mockTest.openTimestamp).format('DD/MM/YYYY HH:mm')}
                                    </span>
                                </div>
                            ) : (
                                <div className={'TestPage__time__container'}>
                                    <span className={'TestPage__time__title'}>Test will be opened at:</span>
                                    <span className={'TestPage__time__date'}>
                                        {moment(mockTest.openTimestamp).format('DD/MM/YYYY HH:mm')}
                                    </span>
                                </div>
                            )}
                            <StatsBox />
                            <div
                                onClick={() => dispatch(push(`/tests/${id}/performing`))}
                                className={'TestPage__start__container'}
                            >
                                <span className={'TestPage__start__text'}>START</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'TestPage__resources'}>
                    <span className={'TestPage__resources__title'}>Related resources</span>
                    <div className={'TestPage__resources__container'}>
                        {mockTest.relatedResources.map((resource) => {
                            return (
                                <ResourceListItem
                                    key={resource.id}
                                    id={resource.id}
                                    name={resource.name}
                                    courseName={resource.courseName}
                                    resourceLink={resource.resourceLink}
                                    resourceType={resource.resourceType}
                                    minified
                                />
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className={'TestPage__results'}>
                <span className={'TestPage__results__title'}>Your results</span>
            </div>
        </div>
    );
};

export default TestPage;
