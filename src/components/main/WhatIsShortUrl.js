import React from "react";

const WhatIsShortUrl = () => {
  const containerStyle = {
    maxWidth: "800px", // 컨테이너 최대 너비 지정
    margin: "0 auto", // 수평 가운데 정렬
    padding: "20px", // 내용과 컨테이너 간격 추가
  };

  return (
    <div className="container" style={containerStyle}>
      <h1 className="text-center mb-4">단축 URL이란?</h1>
      <p className="text-justify">
        URL 단축(URL shortening)은 월드 와이드 웹 상의 긴 URL을 짧게 만들어 주는
        기술이다.
        <br />
        URL 단축 기능을 제공하는 서버는 HTTP 넘겨주기를 이용해
        클라이언트(client)를 긴 URL로 넘겨준다.
        <br />
        수백 바이트 길이의 URL이 있을 수 있지만,
        <br />
        단축된 URL은 대개 URL 단축 서버의 주소 뒤에 6~7자리 정도의 쿼리(query)가
        붙어 있어서
        <br />
        길어야 30 바이트 수준을 넘지 않기 때문에 자원을 절약하고 관심을 끌 수
        있다.
        <br />
        덕분에 트위터와 같은 마이크로블로그 서비스에서 인기를 얻는다.
        <br />
        반면, 클라이언트는 직접 접속하기 전까지는 URL 제공자의 설명을 믿고 위험
        사이트로 유도될 수 있기 때문에
        <br />
        피싱이나 사기, 클릭 유도, 스팸 등의 위험이 있기도 하다.
        <br />
        이 때문에 URL 단축 서버에서 특정 URL 단축을 거부하기도 한다.
        <br />
      </p>
      <h1 className="text-center mb-4">단축 URL의 특징</h1>
      <p className="text-justify">
        단축 URL 서비스는 간편하지만, 단점(위험성)이 있습니다.
        <br />
        링크를 클릭하는 사용자는 단축된 URL만 보고 클릭하기 때문에 어떤 곳으로
        이동할지 알 수 없습니다.
        <br />
        <br />
        - Short URL 서비스는 주로 요청을 Redirect 시킵니다. (Redirect와
        Forward의 차이점에 대해 검색해보세요.)
        <br />
        - 긴 URL을 짧은 URL로 압축할 수 있다. - short url만으로는 어디에
        연결되어있는 지 알 수 없다.
        <br />
        때문에 피싱 사이트 등의 보안에 취약하다.
        <br />
        - 광고를 본 뒤에 원본url로 넘겨주기도 한다. 이 과정에서 악성 광고가 나올
        수 있다.
        <br />
        - 당연하지만 이미 존재하는 키를 입력하여 들어오는 사람이 존재할 수 있다.
        <br />
        - 기존의 원본 URL 변경되었더라도 단축 URL을 유지하여, 혼란을 방지할 수
        있다.
        <br />
      </p>
    </div>
  );
};

export default WhatIsShortUrl;
