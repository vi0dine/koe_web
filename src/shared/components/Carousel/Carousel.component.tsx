import React, { ReactNode, useEffect, useState } from 'react';
import './Carousel.styles.scss';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

type CarouselProps = {
    slides: ReactNode[];
    interval: number;
};

const Carousel = ({ slides, interval }: CarouselProps) => {
    const [activeSlide, setActiveSlide] = useState(0);

    useEffect(() => {
        let id: any = null;
        if (slides) {
            id = setInterval(() => {
                if (slides.length > activeSlide + 1) {
                    setActiveSlide((activeSlide) => activeSlide + 1);
                } else {
                    setActiveSlide(0);
                }
            }, interval);
        }
        return () => clearInterval(id);
    }, [slides, activeSlide]);

    return (
        <div className={'Carousel__container'}>
            <SwitchTransition mode={'out-in'}>
                <CSSTransition
                    key={activeSlide}
                    addEndListener={(node, done) => {
                        node.addEventListener('transitionend', done, false);
                    }}
                    classNames="fade"
                >
                    <div className={'Slide__container'}>{slides[activeSlide]}</div>
                </CSSTransition>
            </SwitchTransition>
            <div className={'Carousel__navigation__container'}>
                {[...Array(slides.length)].map((el, i) => {
                    return (
                        <span
                            onClick={() => setActiveSlide(i)}
                            key={i}
                            className={`Carousel__navigation__dot ${activeSlide === i ? 'current' : ''}`}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Carousel;
