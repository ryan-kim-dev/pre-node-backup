import React from 'react';
import styled from 'styled-components';
import Register from './Register';
import SocialLogin from './SocialLogin';

function RegisterPage() {
  return (
    <RegisterLayout>
      <div style={{ width: '400px', marginRight: '10px' }}>
        <h2>Join the Stack Overflow community</h2>

        <p>
          Get unstuck — ask a question
          <br /> <br />
          Unlock new privileges like voting and commenting
          <br /> <br />
          Save your favorite tags,filters, and jobs
          <br /> <br />
          Earn reputation and badges
        </p>
        <p style={{ fontSize: '10px' }}>
          Collaborate and share knowledge with a private group for FREE.
          <br />
          <span style={{ color: '#078AFF' }}>
            Get Stack Overflow for Teams free for up to 50 users.
          </span>
        </p>
      </div>
      <div>
        <SocialLogin />
        <Register />
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontSize: '11px' }}>
            Already have an account?{' '}
            <span style={{ color: '#078AFF', cursor: 'pointer' }}>Log in</span>
          </p>
          <p style={{ fontSize: '11px', cursor: 'pointer' }}>
            Log in Are you an employer?
            <span style={{ color: '#078AFF', cursor: 'pointer' }}>
              Sign up on Talent
            </span>
          </p>
        </div>
      </div>
    </RegisterLayout>
  );
}

export default RegisterPage;

const RegisterLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eff0f1;
`;
