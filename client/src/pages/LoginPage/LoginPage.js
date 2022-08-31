import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';
import SocialLogin from '../RegisterPage/SocialLogin';

function LoginPage() {
  return (
    <LoginPageLayout>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
        }}
      >
        <SocialLogin />
        <LoginForm />
      </div>
    </LoginPageLayout>
  );
}

export default LoginPage;

const LoginPageLayout = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #eff0f1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
