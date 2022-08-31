import React from 'react';
import styled from 'styled-components';

function SocialLogin() {
  return (
    <SocialLoginLayout>
      <button type="button">
        <img src="" alt="" /> Login in with Google
      </button>
    </SocialLoginLayout>
  );
}

export default SocialLogin;

const SocialLoginLayout = styled.div`
  height: 35px;
  margin-bottom: 20px;
  & button {
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #fff;
    border-radius: 3px;
    border: 1px #ddd solid;
  }
`;
