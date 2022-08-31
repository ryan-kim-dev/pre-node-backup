import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStackOverflow } from '@fortawesome/fontawesome-free-brands';
import { BiSearch } from 'react-icons/bi';
import Aside from './Aside';

function Navbar() {
  const navigate = useNavigate();
  const [keyword, setKeyword] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const onChange = (event) => {
    setKeyword(event.target.value);
  };
  const handleSearchInput = async (event) => {
    // * 검색어 제출버튼 온서브밋 핸들러
    // TODO: 키워드만 추려서 검색결과 들어가는지 확인
    // 쿼리 파라미터 제대로 안들어가고 있음.
    // 현재 검색 요청 시 url 상태: /questions?keyword=
    event.preventDefault();
    const res = await axios.get('/questions', { params: { keyword } });
    // .then((response) => console.log(response.data))
    // .catch((err) => console.log(`${err}`));
    console.log(res.data);
    setKeyword('');
  };

  const handleNavbarPopup = () => {
    return setIsOpen(!isOpen);
  };

  const handleLogoClick = () => {
    return navigate('/');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <NavbarLayout>
      <div className="left">
        <NavLinkBox onClick={handleNavbarPopup}>
          {isOpen ? <Aside /> : <GiHamburgerMenu />}
        </NavLinkBox>
        <LogoButton type="button" onClick={handleLogoClick}>
          <FontAwesomeIcon icon={faStackOverflow} size="2x" />
          <span>
            stack <b>overflow</b>
          </span>
        </LogoButton>
      </div>
      <div className="mid">
        <form onChange={onChange} onSubmit={handleSearchInput}>
          <label htmlFor="search">
            <input
              id="search"
              defaultValue={keyword}
              type="text"
              placeholder="Search..."
            />
          </label>
          <button id="search-btn" type="submit">
            <BiSearch />
          </button>
        </form>
      </div>
      <div className="right">
        <Button onClick={handleSubmit}>Log in</Button>
        <Button onClick={handleSubmit}>Sign up</Button>
      </div>
    </NavbarLayout>
  );
}

export default Navbar;

const NavbarLayout = styled.div`
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1);
  background-color: #f7f7f7;
  width: 100%;
  height: 10%;
  display: flex;
  justify-content: center;
  align-items: center;

  .left {
    // navbar 좌측 영역: 햄버거, 로고버튼
    display: flex;
    align-items: center;
    width: 20%;
  }

  .mid {
    // navbar 중앙: 검색어 입력 인풋, 검색버튼
    width: 60%;

    #search {
      // 검색어 입력 인풋필드
      width: 50%;
      height: 40px;
      border: 0.2px solid gray;
    }

    #search-btn {
      // 질문 검색 버튼
      color: gray;
      background-color: transparent;
      border: none;
      cursor: pointer;
      font-size: 25px;
      position: relative;
      top: 8px;
      margin: 0 10px;

      :hover {
        color: skyblue;
      }
    }
  }

  .right {
    // navbar 우측: 로그인, 로그아웃 버튼
  }
`;

const NavLinkBox = styled.div`
  border: 1px solid gray;
  display: flex;
`;

const LogoButton = styled.button`
  background: transparent;
  cursor: pointer;
  height: 10%;
  border: none;
`;

const Button = styled.button`
  width: 80px;
  height: 100%;
  padding-right: 10px;
`;
