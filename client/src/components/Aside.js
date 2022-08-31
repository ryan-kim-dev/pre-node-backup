import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Aside() {
  return (
    <AsideLayout>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/register">회원가입</Link>
        </li>
        <li>
          <Link to="/questions">Questions</Link>
        </li>
        <li>
          <Link to="/mypage">My page</Link>
        </li>
      </ul>
    </AsideLayout>
  );
}

export default Aside;

const AsideLayout = styled.div`
  position: absolute;
  top: 60px;
  ul {
    list-style: none;
  }
`;
