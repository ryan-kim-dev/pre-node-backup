import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// 저장된 회원 자기소개 나타내는 박스 입니다
/**
 *
 * 화면 안뻗게 임시로 전체 게시글 get요청으로 넣었음 -> 추후 회원정보 수정 PUT 요청으로 사용자 정보 담아서 요청으로 바꾸기
 * 조건부렌더링 -> 데이터 받아오는거 db테이블? 백엔드랑 같이 확인하고 수정
 */

function AboutProfileBox() {
  const [myProfileList, setMyProfileList] = useState(null);
  const navigate = useNavigate();

  const getProfile = async () => {
    const response = await axios.get('/mypage');
    console.log(response.data);
    // const temp = request.data.questions.filter((el) => el.writer === userId);
    setMyProfileList(response.data.body);
  };
  const profileEditHandler = () => {
    navigate('/edit-mypage');
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <AboutProfileBoxLayout>
      <ProfileEditButton type="submit" onClick={profileEditHandler}>
        edit button
      </ProfileEditButton>
      <ProfileBox>
        {myProfileList !== undefined ? (
          myProfileList?.map((profile, idx) => {
            return (
              <div key={Math.random()} idx={idx}>
                <ProfileTitle>
                  <span style={{ fontSize: '18px', color: 'skyBlue' }}>
                    {profile.title}
                  </span>
                  {/* :<span style={{ fontSize: '14px' }}> {profile.content} </span> */}
                </ProfileTitle>
              </div>
            );
          })
        ) : (
          <div>
            <ProfileTitle>자기소개를 작성 하세요</ProfileTitle>
            <ProfileContent>
              상단 Edit button 을 눌러 개성있는 나의 소개글을 작성 해 보세요
            </ProfileContent>
          </div>
        )}
      </ProfileBox>
    </AboutProfileBoxLayout>
  );
}

export default AboutProfileBox;
const AboutProfileBoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  align-items: flex-end;
`;
const ProfileBox = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 20px;
  box-shadow: 7px 8px 30px rgba(0, 0, 0, 0.2);
  overflow: scroll;
  /* border-radius: 10px; */
  box-sizing: border-box;
  padding: 1rem;
`;
const ProfileTitle = styled.h2`
  text-align: left;
`;

const ProfileContent = styled.div`
  box-sizing: border-box;
  display: flex;
`;
const ProfileEditButton = styled.button`
  margin: 10px;
  width: 80px;
  height: 30px;
  background-color: #eee;
  border-radius: 5px;
  color: #078aff;
  border: 1px solid #078aff;
  cursor: pointer;
  :hover {
    background-color: #078aff;
    color: #fff;
  }
`;
