import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    body {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }
`;

export const BackgroundLayout = styled.div`
  // 전체 화면에서 배경영역 전체 차지하기 위한 컨테이너입니다.
  // App.js에서 최상위로 감싸게 두었는데 추후 위치는 수정해야 할 수도??
  // flex-direction 칼럼방향으로 주어서 navbar, 컨텐츠, footer 순으로
  // 세로로 맞추기 위해 flex 줬습니다.
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
