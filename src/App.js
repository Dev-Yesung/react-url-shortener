import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Modal from "react-modal";

import Footer from "./components/footer/Footer";
import NavigationBar from "./components/head/NavigationBar";
import Title from "./components/head/Title";
import UrlForm from "./components/main/UrlForm";

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
    <div>
      <header>
        <Title />
        <NavigationBar openModal={openModal} />
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Modal"
        >
          {modalContent}
          <button onClick={closeModal}>닫기</button>
        </Modal>
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<UrlForm />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default App;
