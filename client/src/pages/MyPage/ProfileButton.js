import React, { useState } from 'react';

import styled from 'styled-components';
import { useNavigate, NavLink } from 'react-router-dom';

function ProfileButton() {
  const [currentTab, setCurrentTab] = useState(0);
  const menuArr = [
    { id: 0, name: 'Profile', element: '/mypage' },
    { id: 1, name: 'My Question', element: '/user-question' },
  ];
  const selectMenuHandler = (id) => {
    setCurrentTab(id);
  };
  const navigate = useNavigate();

  const editMyProfile = () => {
    navigate('/edit-mypage');
  };
  const deleteMyAccount = () => {
    navigate('/delete-account');
  };

  return (
    <ProfileButtonLayout>
      <TabMenu>
        {menuArr.map(({ name, id, element }) => {
          return (
            <NavLink to={element} key={id}>
              <button
                type="button"
                key={id}
                className={currentTab === id ? 'submenu' : 'submenu'}
                onClick={() => selectMenuHandler(id)}
              >
                {name}
              </button>
            </NavLink>
          );
        })}
      </TabMenu>

      <PersonalInFoBox>
        <h3>PERSONAL INFORMATION</h3>
        <NavLink to="edit-mypage">
          <button type="button" onClick={editMyProfile}>
            Edit Profile
          </button>
        </NavLink>
        <NavLink to="delete-acccount">
          <button type="button" onClick={deleteMyAccount}>
            Delete Account
          </button>
        </NavLink>
      </PersonalInFoBox>
    </ProfileButtonLayout>
  );
}

export default ProfileButton;

const ProfileButtonLayout = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const TabMenu = styled.ul`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  list-style: none;

  .submenu {
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 100%;
    border: none;
    margin-right: 10px;
    background-color: transparent;
  }

  .active {
    border-radius: 30px;
    background-color: #f27622;
    color: #fff;
    transition: 0.3s;
  }

  & div.desc {
    text-align: center;
  }
`;

const PersonalInFoBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  & h3 {
    font-size: 17px;
  }
  & button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;
