import React, { useState } from 'react';
import './SignInForm.styles.scss';
import Input from '../../../../shared/components/Input/Input.component';
import Checkbox from '../../../../shared/components/Checkbox/Checkbox.component';
import Button from '../../../../shared/components/Button/Button.component';

type SignInFormProps = {
    onFormChange: (val: string) => void;
};

const SignInForm = ({ onFormChange }: SignInFormProps) => {
    const [userData, setUserData] = useState({
        email: '',
        password: '',
        remember: false,
    });

    return (
        <div className={'SignInForm__container'}>
            <div className={'SignInForm__header__container'}>
                <p className={'SignInForm__header__title'}>Sign In.</p>
                <p className={'SignInForm__header__subtitle'}>
                    We are glad to see you again. Log in to
                    <br />
                    see what new we prepared.
                </p>
            </div>
            <form onSubmit={(event) => event.preventDefault()} className={'SignInForm__form'}>
                <Input label={'Email'} onChange={(val) => setUserData({ ...userData, email: val })} disabled={false} />
                <Input
                    label={'Password'}
                    onChange={(val) => setUserData({ ...userData, password: val })}
                    disabled={false}
                    type={'password'}
                />
                <div className={'SignInForm__actions'}>
                    <Checkbox
                        label={<span className={'label'}>Remember me.</span>}
                        onChange={(value) => setUserData({ ...userData, remember: value })}
                        disabled={false}
                    />
                    <span onClick={() => onFormChange('forgot')} className={'label'}>
                        Forgot password?
                    </span>
                </div>
                <Button
                    style={{ marginTop: 50 }}
                    onClick={() => console.log(userData)}
                    label={'Log in'}
                    type={'primary'}
                />
                <div className={'SignInForm__footer'}>
                    <span className={'SignInForm__footer__text'}>
                        Don’t have an account yet?{' '}
                        <strong onClick={() => onFormChange('signUp')}>Join Koe community</strong>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SignInForm;
