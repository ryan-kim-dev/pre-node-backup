// Question.js : 단건 게시글 컴포넌트
import React from 'react';

function Question({ title, content }) {
  return (
    <div>
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
}

export default Question;
