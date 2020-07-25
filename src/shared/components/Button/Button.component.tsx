import React, { ReactNode } from 'react';
import './Button.styles.scss';

type ButtonProps = {
    onClick: React.MouseEventHandler<HTMLElement>;
    label: string | ReactNode;
    type: string;
    disabled?: boolean;
    style?: React.CSSProperties;
};

const Button = ({ label, type = 'primary', disabled = false, onClick, style }: ButtonProps) => {
    return (
        <button style={style} onClick={onClick} disabled={disabled} className={`Button ${type}`}>
            <span className={'Button__label'}>{label}</span>
        </button>
    );
};

export default Button;
