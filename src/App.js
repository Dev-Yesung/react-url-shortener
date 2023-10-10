import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import Footer from "./components/footer/Footer";
import NavigationBar from "./components/head/NavigationBar";
import Title from "./components/head/Title";
import UrlForm from "./components/main/UrlForm";

import "bootstrap/dist/css/bootstrap.min.css"; // 부트스트랩 CSS 추가

Modal.setAppElement("#root");

const App = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  const openModal = (content) => {
    setModalContent(content);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setModalIsOpen(false);
  };

  return (
    <div className="app-container">
      <header className="app-section">
        <Title />
        <NavigationBar openModal={openModal} />
      </header>
      <main className="app-section my-4 text-center">
        {" "}
        {/* 폼을 가운데 정렬하고 크기를 조정 */}
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<UrlForm />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer className="app-section mt-auto">
        {" "}
        {/* 풋터를 화면 아래에 붙임 */}
        <Footer />
      </footer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Modal"
      >
        {modalContent}
        <button onClick={closeModal}>닫기</button>
      </Modal>
    </div>
  );
};

export default App;
