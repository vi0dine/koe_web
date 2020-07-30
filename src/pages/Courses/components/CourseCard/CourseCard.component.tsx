import React from 'react';
import coursePlaceholder from './course_placeholder.svg';
import './CourseCard.styles.scss';
import { useDispatch } from 'react-redux';
import { push } from 'connected-react-router';

type CourseCardProps = {
    id: number;
    imageUri: string;
    title: string;
    category: string;
    coordinator: { id: number; name: string };
};

const CourseCard = ({ id, imageUri, title, category, coordinator }: CourseCardProps) => {
    const dispatch = useDispatch();

    return (
        <div
            className={'CourseCard__container'}
            onClick={() => {
                dispatch(push(`/courses/${id}`));
            }}
        >
            <div
                className={'CourseCard__image'}
                style={{
                    backgroundImage: imageUri ? `url(${imageUri})` : `url('${coursePlaceholder}')`,
                }}
            />
            <div className={'CourseCard__details'}>
                <div className={'CourseCard__details__box'}>
                    <span className={'CourseCard__details__title'}>Students</span>
                    <div className={'CourseCard__details__counter'}>
                        <span>123</span>
                    </div>
                </div>
                <div className={'CourseCard__details__box'}>
                    <span className={'CourseCard__details__title'}>Tests</span>
                    <div className={'CourseCard__details__counter'}>
                        <span>12</span>
                    </div>
                </div>
                <div className={'CourseCard__details__box'}>
                    <span className={'CourseCard__details__title'}>Resources</span>
                    <div className={'CourseCard__details__counter'}>
                        <span>45</span>
                    </div>
                </div>
            </div>
            <div className={'CourseCard__info'}>
                <span className={'CourseCard__title'}>{title}</span>
                <span className={'CourseCard__category'}>Category: {category}</span>
                <span className={'CourseCard__coordinator'}>
                    Coordinator: <b>{coordinator.name}</b>
                </span>
            </div>
        </div>
    );
};

export default CourseCard;
