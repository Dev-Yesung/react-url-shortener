import React from "react";
import YouTube from "react-youtube";

const AboutCreator = () => {
  // YouTube 동영상 ID
  const videoId = "qkY7p6X775I";

  // YouTube 옵션
  const opts = {
    height: "360",
    width: "640",
    playerVars: {
      // 자동 재생 여부
      autoplay: 1,
    },
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>??? : 기분이 쩔어</h1>
      <p className="mb-0">
        깃허브 링크:{" "}
        <a
          href="https://github.com/Dev-Yesung"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Link
        </a>
      </p>
      <YouTube videoId={videoId} opts={opts} style={{ marginBottom: "20px" }} />
    </div>
  );
};

export default AboutCreator;
