import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

function Register() {
  const navigate = useNavigate();

  const [userInfo, setuserInfo] = useState({
    email: '',
    userId: '',
    password: '',
    confirmPassword: '',
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setuserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (userInfo.password === userInfo.confirmPassword) {
      await axios
        .post('/users/register', userInfo)
        .then(() => navigate('/login'))
        .catch((err) => alert(`${err}`));
    }
  };

  return (
    <RegisterLayout>
      <form htmlFor="register" onSubmit={onSubmit} onChange={onChange}>
        <label htmlFor="user-id">
          Display Name <br />
          <input id="user-id" name="userId" type="text" />
        </label>
        <label htmlFor="email">
          Email <br />
          <input id="email" name="email" type="email" />
        </label>
        <label htmlFor="password">
          Password <br />
          <input id="password" name="password" type="password" />
        </label>
        <span>
          Passwords must contain at least eight characters, including at least 1
          letter and 1 number.
        </span>
        <br />
        <label htmlFor="confirm_password">
          Confirm Password <br />
          <input id="confirm_password" name="confirmPassword" type="password" />
        </label>
        <br />
        <button type="submit">Register</button>
      </form>
    </RegisterLayout>
  );
}

export default Register;

const RegisterLayout = styled.div`
  display: flex;
  align-items: center;
  width: 200px;
  height: 600px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 5px 5px 50px rgba(0, 0, 0, 0.3);
  padding: 1rem;
  & form {
    display: flex;
    flex-direction: column;

    width: 100%;

    & label {
      width: 100%;
    }
    & input {
      width: 95%;
      height: 20px;
      margin-bottom: 1rem;
    }
    & span {
      font-size: 10px;
      text-align: left;
    }
    & button {
      color: #fff;
      width: 100%;
      height: 30px;
      background-color: #078aff;
      border-radius: 5px;
      border: none;
      cursor: pointer;
    }
  }
`;
