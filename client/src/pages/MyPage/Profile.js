import React from 'react';
import styled from 'styled-components';
import AboutProfileBox from './AboutProfileBox';
import ProfileButton from './ProfileButton';
import ProfileImage from './ProfileImage';

// mypage 누르면 다이렉트 되는 프로필 페이지 입니다

function Profile() {
  return (
    <ProfileLayout>
      <ProfileImgandInfo>
        <ProfileImage />
        <ProfileButton />
      </ProfileImgandInfo>

      <div>
        <AboutProfileBox />
      </div>
    </ProfileLayout>
  );
}

export default Profile;
const ProfileLayout = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
`;

const ProfileImgandInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 1rem;
`;
