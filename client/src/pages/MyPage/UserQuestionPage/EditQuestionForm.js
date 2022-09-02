import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

function EditQuestionForm() {
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
      .put('/questions', {
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
    <EditQuestionFormLayout>
      <h2> Edit Your Question</h2>
      <EditQuestionBox>
        <form
          action=""
          onChange={onChange}
          onSubmit={onSubmit}
          id="edit-question-form"
        >
          <div>
            <label htmlFor="title">
              Title
              <input type="text" id="title" name="title" />
            </label>
          </div>
          <div>
            <label htmlFor="content">
              Content
              <textarea type="text" id="content" name="content" />
            </label>
          </div>
          <input
            type="submit"
            id="title"
            value="등록"
            className="edit-question-button"
          />
        </form>
      </EditQuestionBox>
    </EditQuestionFormLayout>
  );
}
export default EditQuestionForm;

const EditQuestionFormLayout = styled.div`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-content: top;
  align-items: center;
`;
const EditQuestionBox = styled.div`
  width: 400px;
  height: 400px;
  background-color: #fff;
  box-shadow: 5px 5px 30px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border-radius: 20px;
  & input {
    margin-bottom: 1rem;
    width: 100%;
    height: 30px;
  }
  & textarea {
    width: 100%;
    height: 250px;
    overflow: scroll;
  }
  & .edit-question-button {
    margin: 5px;
    width: 80px;
    height: 30px;
    background-color: #eee;
    border-radius: 5px;
    color: #078aff;
    border: 1px solid #078aff;
    cursor: pointer;
    :hover {
      background-color: #078aff;
      transition: 0.5s;
      color: #fff;
    }
  }
`;
