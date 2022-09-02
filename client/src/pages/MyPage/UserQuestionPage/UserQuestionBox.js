import React from 'react';
import styled from 'styled-components';
import ProfileButton from '../ProfileButton';
import ProfileImage from '../ProfileImage';
import UserQuestions from './UserQuestions';

function UserQuestionList() {
  return (
    <UserQuestionListLayout>
      <div style={{ marginBottom: '200px' }}>
        <ProfileImage />
        <ProfileButton />
      </div>
      <div>
        <UserQuestions />
      </div>
    </UserQuestionListLayout>
  );
}

export default UserQuestionList;

const UserQuestionListLayout = styled.div`
  display: flex;
  align-items: center;
`;
