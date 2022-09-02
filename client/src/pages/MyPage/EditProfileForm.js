import axios from 'axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
// toastify 설치 했습니다 npm i 해주세요

function EditProfileForm() {
  const [profileTitle, setProfileTitle] = useState('');
  const [profileContent, setProfileContent] = useState('');
  const [editPassword, setEditPassword] = useState('');
  const [editName, setEditName] = useState('');
  // 이미지 업로드 state
  const defaultFileName = '새로운 프로필 업로드!';
  const [file, setFile] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [fileName, setFileName] = useState(defaultFileName);
  // 이미지 업로드 로직
  const imgSelectHandler = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setFileName(imageFile.name);
    const fileReader = new FileReader();
    fileReader.readAsDataURL(imageFile);
    fileReader.onload = (event) => setImgSrc(event.target.result);
  };
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
    console.log(profileTitle, profileContent, editPassword, editName, imgSrc);

    const formData = new FormData();
    formData.append('image', file);
    const body = {
      image: imgSrc,
      name: editName,
      Password: editPassword,
      title: profileTitle,
      content: profileContent,
    };
    try {
      axios
        .put('/mypage/edit-profile', body)
        .then((res) => console.log(res, body));

      toast.success('업로드 완료');
      setTimeout(() => {
        setFileName(defaultFileName);
        setImgSrc(null);
      }, 3000);
      // console.log(res);
    } catch (err) {
      toast.error(err.message);
      setFileName(defaultFileName);
      setImgSrc(null);
    }
  };
  return (
    <EditProfileLayout>
      <form onSubmit={submitHandler}>
        {/* 이미지 업로드 부분 입니다 */}
        <label htmlFor="image" style={{ textAlign: 'center' }}>
          Profile Image: {fileName}
        </label>
        <FileDropper>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={imgSelectHandler}
          />
          <PrevImgBox style={{ width: '500px' }}>
            <img
              src={imgSrc}
              alt="upload-preview"
              className={imgSrc && 'show'}
            />
          </PrevImgBox>
        </FileDropper>
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
        <button type="submit" style={{ marginRight: '10px' }}>
          update
        </button>
        <button type="button"> cancel</button>
      </form>
    </EditProfileLayout>
  );
}

export default EditProfileForm;

const EditProfileLayout = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-left: 3rem;
  width: 400px;
  padding: 3rem;
  border-radius: 15px;
  background-color: #fff;
  box-shadow: 10px 15px 30px rgba(0, 0, 0, 0.2);

  align-items: center;
  & input {
    width: 100%;
    height: 20px;
  }
  & textarea {
    width: 100%;
    height: 150px;
  }
  & button {
    width: 80px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    color: #078aff;
    border: 1px solid #078aff;
    cursor: pointer;
  }
  & button:hover {
    background-color: #078aff;
    color: #fff;
  }
`;

const PrevImgBox = styled.div`
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    object-fit: fill;
    width: 0%;
    opacity: 0;

    &.show {
      opacity: 1;
      width: 100%;
      transition: 0.5s;
    }
  }
`;
const FileDropper = styled.div`
  overflow: hidden;
  border: 1px solid #000000;
  width: 150px;
  height: 150px;
  background-color: rgba(255, 255, 255, 0.4);

  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  :hover {
    background-color: #bebebe;
    transition: 0.5s;
    color: #fff;
  }

  input {
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    cursor: pointer;
  }
`;
