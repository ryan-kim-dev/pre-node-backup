// Questions: 전체 질문글 열람 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Question from './Question';

function Questions() {
  const navigate = useNavigate();
  const [questionsList, setQuestionsList] = useState([]);
  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get('/questions');
    setQuestionsList(response.data.questions);
  };
  useEffect(() => {
    fetchData();
  }, []);

  const addQuestion = () => {
    navigate('/add-question');
  };

  return (
    <div>
      <div>
        <button type="button" onClick={addQuestion}>
          Add Question
        </button>
      </div>
      {questionsList?.map((question) => {
        return (
          <Question
            key={Math.random()}
            title={question.title}
            content={question.content}
          />
        );
      })}
    </div>
  );
}

export default Questions;
