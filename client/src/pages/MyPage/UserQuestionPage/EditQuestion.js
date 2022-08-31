import React, { useState } from 'react';
import axios from 'axios';

function EditQuestion() {
  const [data, setData] = useState({
    board_id: '',
    writer: '',
    title: '',
    content: '',
    regdate: '',
    updatedate: '',
    member: '',
  });
  const onChange = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/questions', {
        data: {
          ...data,
        },
      })
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
        </div>
        <input type="submit" id="title" value="등록" />
      </form>
    </div>
  );
}
export default EditQuestion;
