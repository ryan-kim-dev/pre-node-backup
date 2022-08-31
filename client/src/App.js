import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import Navbar from './components/Navbar';
import AddQuestion from './pages/Questions/AddQuestion';
import EditQuestion from './pages/MyPage/UserQuestionPage/EditQuestion';
import DeleteQuestion from './pages/MyPage/UserQuestionPage/DeleteQuestion';
import MyPage from './pages/MyPage/MyPage';
import Footer from './components/Footer';
import { BackgroundLayout, GlobalStyle } from './GlobalStyle';
import Questions from './pages/Questions/Questions';
import EditProfilePage from './pages/MyPage/EditProfilePage';

function App() {
  return (
    <>
      <BackgroundLayout>
        <GlobalStyle />
        <Navbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/questions" element={<Questions />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/edit-mypage" element={<EditProfilePage />} />
          <Route path="/add-question" element={<AddQuestion />} />
          <Route path="/edit-question" element={<EditQuestion />} />
          <Route path="/delete-question" element={<DeleteQuestion />} />
        </Routes>
      </BackgroundLayout>
      <Footer />
    </>
  );
}

export default App;
