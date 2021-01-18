import React from 'react';
import SingIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up';

import './sing-in-and-sign-up.scss';

const SingInAndSignUpPage = () => (
    <div className="sing-in-and-sign-up">
        <SingIn />
        <SignUp />
    </div>
)

export default SingInAndSignUpPage;