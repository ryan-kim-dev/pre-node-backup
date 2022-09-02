import React from 'react';
import styled from 'styled-components';
import AsideMenubar from '../AsideMenubar';
import UserQuestionList from './UserQuestionBox';

function UserQuestionPage() {
  return (
    <UserQuestionPageLayout>
      <div>
        <AsideMenubar />
      </div>
      <div>
        <UserQuestionList />
      </div>
    </UserQuestionPageLayout>
  );
}

export default UserQuestionPage;

const UserQuestionPageLayout = styled.div`
  width: 1200px;
  height: 100vh;
  display: flex;
  align-items: center;
`;
