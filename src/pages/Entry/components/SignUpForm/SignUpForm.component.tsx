import React, { useState } from 'react';
import './SignUpForm.styles.scss';
import Input from '../../../../shared/components/Input/Input.component';
import Checkbox from '../../../../shared/components/Checkbox/Checkbox.component';
import Button from '../../../../shared/components/Button/Button.component';

type SignUpFormProps = {
    onFormChange: (val: string) => void;
};

const SignUpForm = ({ onFormChange }: SignUpFormProps) => {
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        termsAccepted: false,
    });

    return (
        <div className={'SignUpForm__container'}>
            <div className={'SignUpForm__header__container'}>
                <p className={'SignUpForm__header__title'}>Sign Up.</p>
                <p className={'SignUpForm__header__subtitle'}>
                    Give us some of your information to get
                    <br />
                    access to the Koe platform.
                </p>
            </div>
            <form onSubmit={(event) => event.preventDefault()} className={'SignUpForm__form'}>
                <Input
                    label={'Your Name'}
                    onChange={(val) => setUserData({ ...userData, username: val })}
                    disabled={false}
                />
                <Input label={'Email'} onChange={(val) => setUserData({ ...userData, email: val })} disabled={false} />
                <Input
                    label={'Password'}
                    onChange={(val) => setUserData({ ...userData, password: val })}
                    disabled={false}
                    type={'password'}
                />
                <Checkbox
                    style={{ marginTop: '3rem' }}
                    label={
                        <span>
                            By creating an account you agree to the <strong>terms of use</strong> and our{' '}
                            <strong>privacy policy</strong>.
                        </span>
                    }
                    onChange={(value) => setUserData({ ...userData, termsAccepted: value })}
                    disabled={false}
                />
                <Button
                    style={{ marginTop: 50 }}
                    onClick={() => console.log(userData)}
                    label={'Create account'}
                    type={'primary'}
                />
                <div className={'SignUpForm__footer'}>
                    <span className={'SignUpForm__footer__text'}>
                        Already have an account? <strong onClick={() => onFormChange('signIn')}>Log in</strong>
                    </span>
                </div>
            </form>
        </div>
    );
};

export default SignUpForm;
