import React from 'react';
import './FillTheGapsQuestionRenderer.styles.scss';
import { FillTheGapsQuestion } from '../../../../../../types/Question.types';
import Select from '../../../../../../shared/components/Select/Select.component';

type FillTheGapsQuestionProps = {
    question: FillTheGapsQuestion;
};

const FillTheGapsQuestionRenderer = ({ question }: FillTheGapsQuestionProps) => {
    const renderGapsOptions = () => {
        return question.text.split(new RegExp(/(\[[0-9]+])/)).map((el) => {
            if (el.match(/\[[0-9]]/)) {
                const gap = question.gapsOptions.find((gap) => +gap.id === +el.slice(1, -1));
                if (gap) {
                    return (
                        <Select
                            onSelect={(val) => console.log(val)}
                            placeholder={'Choose answer.'}
                            options={gap.options}
                        />
                    );
                }
            } else {
                return <span className={'FillTheGapsQuestion__text'}>{el}</span>;
            }
        });
    };

    return (
        <div className={'FillTheGapsQuestion__container'}>
            <div>{renderGapsOptions()}</div>
        </div>
    );
};

export default FillTheGapsQuestionRenderer;
