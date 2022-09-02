import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

function AddQuestion() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    writer: localStorage.username,
    title: '',
    content: '',
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev, // 기존 객체 복사 (spread)
      [name]: value,
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/questions', data)
      .then(() => {
        alert(`Successfully posted!`);
        navigate('/questions');
      })
      .catch((err) => console.log(`${err}`));
  };

  return (
    <div>
      <form action="" onChange={onChange} onSubmit={onSubmit}>
        <div>
          <label htmlFor="title">
            제목
            <input type="text" id="title" name="title" />
          </label>
        </div>
        <div>
          <label htmlFor="content">
            내용
            <textarea type="text" id="content" name="content" />
          </label>
        </div>
        <input type="submit" id="title" value="등록" />
      </form>
    </div>
  );
}

export default AddQuestion;
