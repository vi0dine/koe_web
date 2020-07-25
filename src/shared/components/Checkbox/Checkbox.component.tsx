import React, { ReactNode } from 'react';
import './Checkbox.styles.scss';

type CheckboxProps = {
    style?: React.CSSProperties;
    label: string | ReactNode;
    onChange: (val: boolean) => void;
    disabled: boolean;
};

const Checkbox = ({ label, onChange, disabled, style }: CheckboxProps) => {
    return (
        <label style={style} className={'Checkbox__container'}>
            <input type={'checkbox'} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
            <span className={'Checkbox__checkbox'} />
            <span className={'Checkbox__label'}>{label}</span>
        </label>
    );
};

export default Checkbox;
