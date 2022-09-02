import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get('/users/logout');
    const loginStatus = false;
    localStorage.setItem('loginStatus', loginStatus);
    return navigate('/');
  };

  return (
    <ButtonLayout>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </ButtonLayout>
  );
}

export default Logout;

const ButtonLayout = styled.div`
  button {
    background-color: transparent;
    border: none;
    font-size: 16px;

    :hover {
      color: salmon;
    }
  }
`;
