import React from 'react';
import './TestInfoBox.styles.scss';
import TestSettingItem from '../TestSettingItem/TestSettingItem.component';

type TestInfoBoxProps = {
    course: {
        id: number;
        name: string;
    };
    type: string;
    authors: {
        id: number;
        name: string;
    }[];
    settings: {
        isMultiAnswerable: boolean;
        isShuffled: boolean;
        isWeighted: boolean;
        isChangeable: boolean;
        isMonitorable: boolean;
        timeLimit: {
            type: string;
            value: number;
        };
        immediateResults: boolean;
        liveStats: boolean;
    };
};

const TestInfoBox = ({ course, type, authors, settings }: TestInfoBoxProps) => {
    const formatTimeLimit = (type: string, duration: number) => {
        let limit = '';

        if (duration < 60) {
            limit = `${duration} seconds`;
        } else if (duration < 3600) {
            const minutes = `${Math.floor(duration / 60)} minute${Math.floor(duration / 60) > 1 ? 's' : ''}`;
            const seconds: number = duration % 60;

            limit = `${minutes}${seconds ? ' and ' + seconds + ' seconds' : ''}`;
        } else {
            const hours = `${Math.floor(duration / 3600)} hour${Math.floor(duration / 3600) > 1 ? 's' : ''}`;
            const minutes: number = Math.floor((duration % 3600) / 60);

            limit = `${hours}${minutes > 1 ? ' and ' + minutes + ' minutes' : ''}`;
        }

        if (type === 'PER_TEST') {
            return `${limit} for test.`;
        } else if (type === 'PER_QUESTION') {
            return `${limit} per question.`;
        } else {
            return 'WRONG TIME LIMIT';
        }
    };

    return (
        <div className={'TestInfoBox__container'}>
            <div>
                <div className={'TestInfoBox__basic'}>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__title'}>Course:</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__value'}>{course.name}</span>
                    </div>
                </div>
                <div className={'TestInfoBox__basic'}>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__title'}>Test type:</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__value'}>{type}</span>
                    </div>
                </div>
                <div className={'TestInfoBox__basic'}>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__title'}>Time limit:</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__value'}>
                            {formatTimeLimit(settings.timeLimit.type, settings.timeLimit.value)}
                        </span>
                    </div>
                </div>
                <div className={'TestInfoBox__basic'}>
                    <div style={{ flex: 1 }}>
                        <span className={'TestInfoBox__info__title'}>Authors:</span>
                    </div>
                    <div style={{ flex: 1 }}>
                        {authors.map((author) => {
                            return (
                                <div key={author.id} className={'TestInfoBox__info__value'}>
                                    <strong>{author.name}</strong>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div>
                <TestSettingItem label={'Multiple correct answers.'} value={settings.isMultiAnswerable} />
                <TestSettingItem label={'Shuffled questions and answers.'} value={settings.isShuffled} />
                <TestSettingItem label={'Questions weights.'} value={settings.isWeighted} />
            </div>
            <div>
                <TestSettingItem label={'Changing answers.'} value={settings.isChangeable} />
                <TestSettingItem label={'Students monitoring.'} value={settings.isMonitorable} />
                <TestSettingItem label={'Immediate results.'} value={settings.immediateResults} />
            </div>
        </div>
    );
};

export default TestInfoBox;
