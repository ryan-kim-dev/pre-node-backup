import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';

function EditProfileForm() {
  const [profileTitle, setProfileTitle] = useState('');
  const [profileContent, setProfileContent] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editName, setEditName] = useState('');

  const profileTitleHandler = (e) => {
    e.preventDefault();
    setProfileTitle(e.target.value);
  };
  const profileContentHandler = (e) => {
    e.preventDefault();
    setProfileContent(e.target.value);
  };
  const editPasswordHandler = (e) => {
    e.preventDefault();
    setEditPassword(e.target.value);
  };
  const editNameHandler = (e) => {
    e.preventDefault();
    setEditName(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(profileTitle);
    console.log(profileContent);

    const body = {
      name: editName,
      Password: editPassword,
      title: profileTitle,
      content: profileContent,
    };
    axios
      .post('/mypage/edit-profile', body)
      .then((res) => console.log(res, body));
  };
  return (
    <EditProfileLayout>
      <form onSubmit={submitHandler}>
        <label htmlFor="name">
          Name
          <input
            name="name"
            type="text"
            value={editName}
            onChange={editNameHandler}
          />
        </label>
        <label htmlFor="password">
          New Password
          <input
            type="password"
            value={editPassword}
            onChange={editPasswordHandler}
          />
        </label>
        <label htmlFor="title">
          Title
          <input
            name="title"
            type="text"
            value={profileTitle}
            onChange={profileTitleHandler}
          />
        </label>
        <label htmlFor="content">
          About you
          <textarea
            name="conent"
            type="text"
            value={profileContent}
            onChange={profileContentHandler}
          />
        </label>
        <button type="submit"> update </button>
      </form>
    </EditProfileLayout>
  );
}

export default EditProfileForm;

const EditProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  width: 600px;
  background-color: #fff;
  align-items: center;
  & input {
    width: 100%;
    height: 30px;
  }
  & textarea {
    width: 100%;
    height: 300px;
  }
`;
