// Questions: 전체 질문글 열람 페이지
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
// import Lists from './Lists';
import moment from 'moment';
import AsideMenubar from '../MyPage/AsideMenubar';
import 'moment/locale/ko';

function Questions() {
  const navigate = useNavigate();
  const [questionsList, setQuestionsList] = useState([]);

  const fetchData = async () => {
    axios.defaults.withCredentials = true;
    const response = await axios.get('/questions');
    console.log(response.data);
    setQuestionsList(response.data.questions);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addQuestion = () => {
    navigate('/add-question');
  };

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format('YYYY년 MMMM Do, hh:mm');
    }
    return moment(a).format('YYYY년 MMMM Do, hh:mm');
  };

  return (
    <QuestionsLayout>
      <QuestionsAside />
      <ContentBox>
        <div className="add-question-btn-section">
          <span>All Questions</span>
          <button type="button" onClick={addQuestion}>
            Add Question
          </button>
        </div>
        <QuestionList>
          {questionsList?.map((question, idx) => {
            return (
              <ListItem key={question.questionIdx} value={idx}>
                <Link to={`/questions/${question.questionIdx}`}>
                  <TitleBox>
                    <h3 className="title">{question.title}</h3>
                  </TitleBox>
                  <ContentBox>
                    <pre>{question.content}</pre>
                  </ContentBox>
                  <PostedInfoBox>
                    <div className="author">{question.writer}</div>
                    <div className="date">
                      {SetTime(question.regdate, question.updatedate)}
                    </div>
                  </PostedInfoBox>
                </Link>
              </ListItem>
            );
          })}
        </QuestionList>
      </ContentBox>
    </QuestionsLayout>
  );
}

export default Questions;

const QuestionsLayout = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  .add-question-btn-section {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;

    span {
      font-size: 30px;
    }
  }
`;

const TitleBox = styled.div`
  cursor: pointer;
  color: blueviolet;
`;

const ContentBox = styled.div`
  padding: 10px;
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const QuestionsAside = styled(AsideMenubar)``;

const QuestionList = styled.section``;

const ListItem = styled.div`
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  width: 80vw;
  margin-bottom: 30px;

  a {
    text-decoration: none;
    color: #000000;
  }
`;

const PostedInfoBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px;
  line-height: 1;

  .author {
    margin-right: 10px;
    font-weight: bold;
  }
  .date {
    color: gray;
    font-size: 13px;
  }
`;
