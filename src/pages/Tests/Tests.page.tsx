import React from 'react';
import './Tests.styles.scss';
import TestListItem from './components/TestListItem/TestListItem.component';
import ResultListItem from './components/ResultListItem/ResultListItem.component';

const TestsPage = () => {
    const mockTests = [
        {
            id: 1,
            title: 'Anatomia - Kończyna Górna',
            courseName: 'Anatomia 1',
            isOpen: false,
            openTimestamp: Date.now(),
        },
        {
            id: 2,
            title: 'Żelazo',
            courseName: 'Biochemia 2',
            isOpen: true,
            openTimestamp: Date.now(),
        },
        {
            id: 3,
            title: 'Insulina',
            courseName: 'Biochemia 2',
            isOpen: true,
            openTimestamp: Date.now(),
        },
        {
            id: 4,
            title: 'Anatomia - Brzuch i Miednica',
            courseName: 'Anatomia 1',
            isOpen: true,
            openTimestamp: Date.now(),
        },
        {
            id: 5,
            title: 'Anatomia - Głowa i Szyja',
            courseName: 'Anatomia 1',
            isOpen: false,
            openTimestamp: Date.now(),
        },
    ];

    return (
        <div className={'TestsPage__container'}>
            <div className={'TestsPage__tests'}>
                <div className={'TestsPage__column'}>
                    <span className={'TestsList__title'}>Public tests</span>
                    <div className={'TestsList__container'}>
                        {mockTests.map((test) => {
                            return (
                                <TestListItem
                                    key={test.id}
                                    id={test.id}
                                    title={test.title}
                                    courseName={test.courseName}
                                    isOpen={test.isOpen}
                                    openTimestamp={test.openTimestamp}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className={'TestsPage__column'}>
                    <span className={'TestsList__title'}>Upcoming tests</span>
                    <div className={'TestsList__container'}>
                        {mockTests
                            .filter((test) => !test.isOpen)
                            .map((test) => {
                                return (
                                    <TestListItem
                                        key={test.id}
                                        id={test.id}
                                        title={test.title}
                                        courseName={test.courseName}
                                        isOpen={test.isOpen}
                                        openTimestamp={test.openTimestamp}
                                    />
                                );
                            })}
                    </div>
                </div>
            </div>
            <div className={'TestsPage__results'}>
                <div className={'TestsPage__column'}>
                    <span className={'ResultsList__title'}>Recent results</span>
                    <div className={'ResultsList__container'}>
                        <ResultListItem />
                        <ResultListItem />
                        <ResultListItem />
                        <ResultListItem />
                        <ResultListItem />
                        <ResultListItem />
                        <ResultListItem />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestsPage;
