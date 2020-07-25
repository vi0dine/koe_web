import React from 'react';
import './Input.styles.scss';

type InputProps = {
    label: string;
    onChange: (val: string) => void;
    disabled: boolean;
    type?: string;
    style?: React.CSSProperties;
};

const Input = ({ label, onChange, style, disabled = false, type = 'text' }: InputProps) => {
    return (
        <div style={style} className={'Input__container'}>
            <label className={'Input__label'} htmlFor={'input'}>
                {label}
            </label>
            <input
                className={'Input__field'}
                onChange={(e) => onChange(e.target.value)}
                name={'input'}
                type={type}
                disabled={disabled}
            />
        </div>
    );
};

export default Input;
