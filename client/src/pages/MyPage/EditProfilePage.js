import React from 'react';
import styled from 'styled-components';
import EditProfileForm from './EditProfileForm';
import ProfileButton from './ProfileButton';
import ProfileImage from './ProfileImage';
import AsideMenubar from './AsideMenubar';

function EditProfilePage() {
  return (
    <EditProfileLayout>
      <div>
        <AsideMenubar />
      </div>
      <EditProfileBox>
        <ProfileImgandInfo>
          <ProfileImage />
          <ProfileButton />
        </ProfileImgandInfo>
        <div>
          <EditProfileForm />
        </div>
      </EditProfileBox>
    </EditProfileLayout>
  );
}

export default EditProfilePage;

const EditProfileLayout = styled.div`
  width: 1200px;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const EditProfileBox = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  display: flex;
`;
const ProfileImgandInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 250px;
  margin: 1rem;
`;
