import React, { useState } from 'react';
import './ForgottenPasswordForm.styles.scss';
import Input from '../../../../shared/components/Input/Input.component';
import Button from '../../../../shared/components/Button/Button.component';

type ForgottenPasswordFormProps = {
    onFormChange: (val: string) => void;
};

const ForgottenPasswordForm = ({ onFormChange }: ForgottenPasswordFormProps) => {
    const [userData, setUserData] = useState({
        email: '',
    });

    return (
        <div className={'SignInForm__container'}>
            <div className={'SignInForm__header__container'}>
                <p className={'SignInForm__header__title'}>Recover password.</p>
                <p className={'SignInForm__header__subtitle'}>
                    We will send your new password to you ASAP.
                    <br />
                    This time, try to remember it.
                </p>
            </div>
            <form onSubmit={(event) => event.preventDefault()} className={'SignInForm__form'}>
                <Input label={'Email'} onChange={(val) => setUserData({ ...userData, email: val })} disabled={false} />
                <Button
                    style={{ marginTop: 50 }}
                    onClick={() => console.log(userData)}
                    label={'Recover password.'}
                    type={'primary'}
                />
                <div className={'SignInForm__footer'}>
                    <span className={'SignInForm__footer__text'}>
                        Now you remember? <strong onClick={() => onFormChange('signIn')}>Go back and sign in.</strong>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default ForgottenPasswordForm;
