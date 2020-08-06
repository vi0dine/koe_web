import React, { useState } from 'react';
import './BasicQuestionRenderer.styles.scss';
import { BasicQuestion } from '../../../../../../types/Question.types';

type BasicQuestionProps = {
    question: BasicQuestion;
};

const BasicQuestionRenderer = ({ question }: BasicQuestionProps) => {
    const [selectedAnswer, setSelectedAnswer] = useState(0);

    const isSelected = (id: number) => {
        return +id === +selectedAnswer;
    };

    return (
        <div className={'BasicQuestion__container'}>
            <div className={'BasicQuestion__question__container'}>
                <span className={'BasicQuestion__question__text'}>{question.question}</span>
            </div>
            <div className={'BasicQuestion__answers__container'}>
                {question.answers &&
                    question.answers.map((answer) => {
                        return (
                            <div
                                key={answer.id}
                                onClick={() => setSelectedAnswer(answer.id)}
                                className={`BasicQuestion__answer__container ${
                                    isSelected(answer.id) ? 'selected' : ''
                                }`}
                            >
                                <span className={'BasicQuestion__answer__text'}>{answer.value}</span>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default BasicQuestionRenderer;
