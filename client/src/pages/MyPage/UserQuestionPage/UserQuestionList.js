import React from 'react';
import styled from 'styled-components';
import ProfileButton from '../ProfileButton';
import ProfileImage from '../ProfileImage';

function UserQuestionList() {
  return (
    <UserQuestionListLayout>
      <ProfileImage />
      <ProfileButton />
    </UserQuestionListLayout>
  );
}

export default UserQuestionList;

const UserQuestionListLayout = styled.div``;
