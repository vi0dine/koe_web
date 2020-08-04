import React from 'react';
import './CriteriaBox.styles.scss';

type CriteriaBoxProps = {
    maxPoints: number;
    criteria: { grade: string; from: number; to: number }[];
};

const CriteriaBox = ({ criteria, maxPoints }: CriteriaBoxProps) => {
    const getPointValue = (percentage: number) => {
        return Math.round((percentage / 100) * maxPoints);
    };

    return (
        <div className={'CriteriaBox__container'}>
            <span className={'CriteriaBox__maxPoints'}>
                Max points: <strong>{maxPoints}</strong>
            </span>
            {criteria.map((criterium, i) => {
                return (
                    <div key={i} className={'CriteriaBox__criterium'}>
                        <div className={'CriteriaBox__criterium__grade'}>{criterium.grade}</div>
                        <div className={'CriteriaBox__criterium__range'}>
                            <span className={'CriteriaBox__criterium__percentage'}>
                                {criterium.from}% - {criterium.to}%
                            </span>
                            <span className={'CriteriaBox__criterium__points'}>
                                ({getPointValue(criterium.from)} pkt. - {getPointValue(criterium.to)} pkt.)
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default CriteriaBox;
