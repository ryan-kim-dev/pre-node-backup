import React, { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

function AddQuestion() {
  const [data, setData] = useState({
    writer: '',
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
    console.log(data);
    axios
      .post('/questions', data)
      .then((res) => {
        console.log(res.data);
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
          <label htmlFor="content">
            작성자
            <textarea type="text" id="content" name="writer" />
          </label>
        </div>
        <input type="submit" id="title" value="등록" />
      </form>
    </div>
  );
}

export default AddQuestion;
