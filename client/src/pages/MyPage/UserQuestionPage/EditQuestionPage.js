import React from 'react';
import styled from 'styled-components';
import EditQuestionForm from './EditQuestionForm';

function EditQuestionPage() {
  return (
    <EditQuestionPageLayout>
      <EditQuestionForm />
    </EditQuestionPageLayout>
  );
}

export default EditQuestionPage;

const EditQuestionPageLayout = styled.div`
  margin-top: 100px;
  width: 1200px;
  height: 100%;
  display: flex;
`;
