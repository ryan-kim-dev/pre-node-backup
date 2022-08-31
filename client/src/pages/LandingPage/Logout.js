import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const navigate = useNavigate();

  const handleLogout = async (e) => {
    e.preventDefault();
    await axios.get('/users/logout');

    return navigate('/');
  };

  return (
    <div>
      <button type="button" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
}

export default Logout;
