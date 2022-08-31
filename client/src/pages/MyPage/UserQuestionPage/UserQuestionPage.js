import React from 'react';
import styled from 'styled-components';
import AsideMenubar from '../AsideMenubar';
import UserQuestionList from './UserQuestionList';

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
  border: 1px solid #000;
  display: flex;
  align-items: center;
`;
