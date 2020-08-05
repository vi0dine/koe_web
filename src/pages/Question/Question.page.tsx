import React, { useEffect } from 'react';
import './Question.styles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { collapseSidenav } from '../../store/App/App.actions';
import QuestionBox from './components/QuestionBox/QuestionBox.component';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const QuestionPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(collapseSidenav(true));
    }, []);

    return (
        <div>
            <div className={'QuestionPage__header'}>
                <span className={'QuestionPage__header__title'}>Question 1</span>
            </div>
            <QuestionBox />
            <div className={'QuestionPage__footer'}>
                <div className={'QuestionPage__footer__button'}>
                    <FontAwesomeIcon className={'QuestionPage__footer__button__icon'} icon={faChevronLeft} />
                    <span className={'QuestionPage__footer__button__text'}>Prev</span>
                </div>
                <div className={'QuestionPage__footer__button'}>
                    <span className={'QuestionPage__footer__button__text'}>Next</span>
                    <FontAwesomeIcon className={'QuestionPage__footer__button__icon'} icon={faChevronRight} />
                </div>
            </div>
        </div>
    );
};

export default QuestionPage;
