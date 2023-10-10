import React from "react";

const Title = () => {
  const titleStyle = {
    fontSize: "3rem", // 폰트 크기 조절
    marginBottom: "2rem", // 아래 간격 조절
    fontFamily: "'Raleway', sans-serif", // 'Raleway' 글꼴 적용
    fontWeight: 700, // 글꼴 두께
    color: "#333", // 글꼴 색상 설정
  };

  return (
    <div className="text-center mt-5" style={titleStyle}>
      <h1>URL 링크단축 서비스</h1>
    </div>
  );
};

export default Title;
