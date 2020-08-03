import React from 'react';
import './Test.styles.scss';
import TestInfoBox from './components/TestInfoBox/TestInfoBox.component';

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
        criteria: {
            '2.0': 10,
            '3.0': 20,
            '3.5': 30,
            '4.0': 40,
            '4.5': 45,
            '5.0': 50,
        },
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
    };

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
                    <div style={{ display: 'flex', flexDirection: 'row' }}></div>
                </div>
                <div className={'TestPage__resources'}>
                    <span className={'TestPage__resources__title'}>Related resources</span>
                </div>
            </div>
            <div className={'TestPage__results'}>
                <span className={'TestPage__results__title'}>Your results</span>
            </div>
        </div>
    );
};

export default TestPage;
