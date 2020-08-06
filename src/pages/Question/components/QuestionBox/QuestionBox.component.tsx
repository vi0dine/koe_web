import React from 'react';
import './QuestionBox.styles.scss';
import {
    BasicQuestion,
    FillTheGapsQuestion,
    InputQuestion,
    isBasicQuestion,
    isFillTheGapsQuestion,
    MatchPairsQuestion,
} from '../../../../types/Question.types';
import BasicQuestionRenderer from './components/BasicQuestion/BasicQuestionRenderer.component';
import FillTheGapsQuestionRenderer from './components/FillTheGapsQuestion/FillTheGapsQuestionRenderer.component';

type QuestionBoxProps = {
    question: BasicQuestion | FillTheGapsQuestion | MatchPairsQuestion | InputQuestion;
};

const QuestionBox = ({ question }: QuestionBoxProps) => {
    const renderQuestion = () => {
        if (isBasicQuestion(question) && question.type === 'BASIC') {
            return <BasicQuestionRenderer question={question} />;
        } else if (isFillTheGapsQuestion(question) && question.type === 'FILL_THE_GAPS') {
            return <FillTheGapsQuestionRenderer question={question} />;
        }
    };

    return <div className={'QuestionBox__container'}>{renderQuestion()}</div>;
};

export default QuestionBox;
