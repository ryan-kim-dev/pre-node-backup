import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
// 어사이드 메뉴 컴포넌트 입니다
function AsideMenubar() {
  const [asideMenuTap, setAsideMenuTap] = useState(0);
  const asideMenuList = [
    { id: 1, name: 'Questions', element: '/questions' },
    { id: 2, name: 'My Page', element: '/mypage' },
    { id: 3, name: 'Edit Profile', element: '/edit-mypage' },
    { id: 4, name: 'My Questions', element: '/user-question' },
  ];
  const asidemenuClickHandler = (id) => {
    setAsideMenuTap(id);
  };
  return (
    <AsideMenuBarLayout>
      <h2>Home</h2>
      <div>
        {asideMenuList.map(({ name, element, id }) => {
          return (
            <AsideNavItem key={id}>
              <NavLink
                to={element}
                style={{
                  width: '100%',
                  textAlign: 'center',
                  lineHeight: '35px',
                  color: '#000',
                  textDecorationLine: 'none',
                }}
              >
                <li
                  style={{ width: '100%' }}
                  role="presentation"
                  index={id}
                  className={asideMenuTap === id ? 'submenu active' : 'submenu'}
                  onClick={() => asidemenuClickHandler(id)}
                >
                  {name}
                </li>
              </NavLink>
            </AsideNavItem>
          );
        })}
      </div>
    </AsideMenuBarLayout>
  );
}

export default AsideMenubar;

const AsideMenuBarLayout = styled.div`
  width: 180px;
  border-right: 3px solid #eee;
  box-sizing: border-box;
  margin: 10px;
  & h2 {
    box-sizing: border-box;
    font-size: 20px;
    padding: 10px;
    margin-left: 1rem;
    text-align: left;
    cursor: pointer;
    border-bottom: 1px solid #aaa;
  }
`;
const AsideNavItem = styled.ul`
  width: 100%;
  height: 35px;
  box-sizing: border-box;
  color: rgba(73, 73, 73, 0.5);
  font-weight: bold;
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  .submenu {
    background-color: transparent;
    font-weight: 300;
    width: 100%;
    cursor: pointer;
    border: none;
  }
  .active {
    background-color: #eff0f1;
    border-right: 2px solid #f27622;
    font-weight: 800;
    transition: 0.3s;
  }
  & div.desc {
    text-align: center;
  }
`;
