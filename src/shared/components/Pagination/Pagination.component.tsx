import React from 'react';
import './Pagination.styles.scss';

type PaginationProps = {
    currentPage: number;
    totalEntries: number;
    perPage: number;
    onChange: (page: number) => void;
};

const Pagination = ({ currentPage, totalEntries, perPage, onChange }: PaginationProps) => {
    return (
        <div className={'Pagination__container'}>
            {[...Array(Math.ceil(totalEntries / perPage))].map((el, i) => {
                return (
                    <span
                        onClick={() => onChange(i)}
                        key={i}
                        className={`Pagination__dot ${currentPage === i ? 'current' : ''}`}
                    />
                );
            })}
        </div>
    );
};

export default Pagination;
