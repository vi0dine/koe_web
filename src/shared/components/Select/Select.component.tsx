import React, { useState } from 'react';
import './Select.styles.scss';

type SelectProps = {
    placeholder: string;
    options: { id: number; value: string }[];
    onSelect: (id: number) => void;
};

const Select = ({ options, onSelect, placeholder }: SelectProps) => {
    const [currentSelection, setCurrentSelection] = useState({ id: 0, value: '' });
    const [optionsOpened, setOptionsOpened] = useState(false);

    return (
        <div onClick={() => setOptionsOpened(!optionsOpened)} className={'Select__container'}>
            <div className={'Select__value'}>
                <span>{currentSelection && currentSelection.value ? currentSelection.value : placeholder}</span>
            </div>
            {optionsOpened && (
                <div className={'Select__dropdown__container'}>
                    <ul>
                        {options.map((opt) => {
                            return (
                                <li onClick={() => setCurrentSelection({ id: opt.id, value: opt.value })} key={opt.id}>
                                    {opt.value}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Select;
