import React from 'react';
import Logout from './Logout';
import Questions from '../Questions/Questions';

/**
 * TODO: 랜딩페이지는 로그인 여부를 상태로 체크하여 로그인 x 일 경우 일반 랜딩 페이지, 로그인 되었을 경우 Questions 컴포넌트가 보여지도록 추후 수정합니다.
 *
 */

function LandingPage() {
  return (
    <div>
      <Logout />

      <Questions />
    </div>
  );
}

export default LandingPage;
