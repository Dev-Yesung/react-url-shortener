import axios from "axios";
import React, { useState } from "react";
import qs from "qs";

// 부트스트랩 CSS 파일을 프로젝트에 추가해야 합니다.
import "bootstrap/dist/css/bootstrap.min.css";

const UrlForm = () => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const urlChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("");
  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const [shortenedUrl, setShortenedUrl] = useState("");
  const [clicksCount, setClicksCount] = useState("");

  const shortenUrlHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        originalUrl: enteredUrl,
      };
      const requestBody = qs.stringify(formData);

      const response = await axios.post(
        `http://ec2-3-35-240-254.ap-northeast-2.compute.amazonaws.com:8081/v1/util/short-url/${selectedOption}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      setShortenedUrl(
        `http://ec2-3-35-240-254.ap-northeast-2.compute.amazonaws.com:8081/${response.data.shortUrl}`
      );
    } catch (error) {
      console.error("단축 URL을 만드는 데 실패했습니다.", error);
    }
  };

  const getRequestCountHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${enteredUrl}/clicks`);

      setClicksCount(response.data.clicks);
    } catch (error) {
      console.error("요청 횟수를 가져오는 데 실패했습니다.", error);
    }
  };

  const copyToClipboard = (event) => {
    event.preventDefault();

    if (shortenedUrl) {
      navigator.clipboard
        .writeText(shortenedUrl)
        .then(() => alert("링크가 클립보드에 복사되었습니다."))
        .catch((error) => console.error("클립보드 복사 실패:", error));
    }
  };

  return (
    <div className="container mt-4 d-flex flex-column align-items-center">
      <form className="text-center">
        <div className="form-group">
          <input
            type="text"
            className="form-control mb-3"
            value={enteredUrl}
            onChange={urlChangeHandler}
            placeholder="주소를 입력해주세요."
            style={{ fontFamily: "Roboto, sans-serif" }}
          />
          <select
            className="form-control my-3"
            value={selectedOption}
            onChange={optionChangeHandler}
            style={{ fontFamily: "Roboto, sans-serif" }}
          >
            <option value="" disabled>
              단축 알고리즘 &#9660;
            </option>
            <option value="1">Base62</option>
            <option value="2">UUID</option>
            <option value="3">Adler</option>
          </select>
        </div>
        <div>
          <button className="btn btn-primary mr-2" onClick={shortenUrlHandler}>
            링크 단축
          </button>
          <button
            className="btn btn-secondary mr-2"
            onClick={getRequestCountHandler}
          >
            요청 횟수 조회
          </button>
          {shortenedUrl && (
            <button
              className="btn btn-success"
              onClick={copyToClipboard}
              disabled={!shortenedUrl} // 복사 버튼을 단축 URL이 있을 때만 활성화
            >
              단축링크 복사하기
            </button>
          )}
        </div>
      </form>

      {shortenedUrl && (
        <div className="alert alert-light my-3">
          <p className="mb-0">
            단축 URL:
            <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
              {shortenedUrl}
            </a>
          </p>
        </div>
      )}

      {clicksCount !== "" && (
        <div className="alert alert-light my-3">
          <p className="mb-0">{`요청 횟수: ${clicksCount} 번`}</p>
        </div>
      )}
    </div>
  );
};

export default UrlForm;
