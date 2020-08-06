import React, { useEffect, useState } from 'react';
import './Question.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { collapseSidenav } from '../../store/App/App.actions';
import QuestionBox from './components/QuestionBox/QuestionBox.component';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { mockQuestions } from '../../types/Question.types';

const QuestionPage = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const dispatch = useDispatch();

    const questions = mockQuestions;

    useEffect(() => {
        dispatch(collapseSidenav(true));
    }, []);

    return (
        <div>
            <div className={'QuestionPage__header'}>
                <span className={'QuestionPage__header__title'}>Question {currentQuestion + 1}</span>
            </div>
            <QuestionBox question={questions[currentQuestion]} />
            <div className={'QuestionPage__footer'}>
                <div
                    onClick={() => setCurrentQuestion(currentQuestion - 1)}
                    className={`QuestionPage__footer__button ${currentQuestion <= 0 ? 'disabled' : ''}`}
                >
                    <FontAwesomeIcon className={'QuestionPage__footer__button__icon'} icon={faChevronLeft} />
                    <span className={'QuestionPage__footer__button__text'}>Prev</span>
                </div>
                <div
                    onClick={() => setCurrentQuestion(currentQuestion + 1)}
                    className={`QuestionPage__footer__button ${questions.length <= currentQuestion ? 'disabled' : ''}`}
                >
                    <span className={'QuestionPage__footer__button__text'}>Next</span>
                    <FontAwesomeIcon className={'QuestionPage__footer__button__icon'} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default QuestionPage;
