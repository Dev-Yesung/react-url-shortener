import React from "react";
import WhatIsShortUrl from "../main/WhatIsShortUrl";
import AboutCreator from "../main/AboutCreator";

const NavigationBar = (props) => {
  const openModal = props.openModal;

  const navBarStyle = {
    fontFamily: "'Raleway', sans-serif", // 'Raleway' 글꼴 적용
    backgroundColor: "#fff", // 배경색 변경
    height: "80px", // 네비게이션 바 높이 조절
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const navLinkStyle = {
    border: "1px solid #333", // 버튼에 박스 테두리 추가
    borderRadius: "5px", // 버튼에 라운드 테두리 적용
    padding: "8px 16px", // 버튼 내용 간격 조정
  };

  return (
    <nav className="navbar navbar-light" style={navBarStyle}>
      <button
        className="btn btn-link nav-link mr-2"
        onClick={() => openModal(<WhatIsShortUrl />)}
        style={navLinkStyle}
      >
        단축 URL이란?
      </button>
      <button
        className="btn btn-link nav-link"
        onClick={() => openModal(<AboutCreator />)}
        style={navLinkStyle}
      >
        만든이
      </button>
    </nav>
  );
};

export default NavigationBar;
