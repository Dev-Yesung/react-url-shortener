import axios from "axios";
import React, { useState } from "react";
import qs from "qs";

const UrlForm = () => {
  const [enteredUrl, setEnteredUrl] = useState("");
  const urlChangeHandler = (event) => {
    setEnteredUrl(event.target.value);
  };

  const [selectedOption, setSelectedOption] = useState("1");
  const optionChangeHandler = (event) => {
    setSelectedOption(event.target.value);
  };

  const shortenUrlHandler = async (event) => {
    event.preventDefault();

    try {
      const formData = {
        originalUrl: enteredUrl,
      };
      const requestBody = qs.stringify(formData);

      const response = await axios.post(
        `http://localhost:8081/v1/util/short-url/${selectedOption}`,
        requestBody,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log(response.data);
      const elem = document.getElementById("result1");
      elem.innerText = `단축 URL: http://localhost:8081/${response.data.shortUrl}`;
      elem.href = `http://localhost:8081/${response.data.shortUrl}`;
    } catch (error) {
      console.error("단축 URL을 만드는 데 실패했습니다.", error);
    }
  };

  const getRequestCountHandler = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(`${enteredUrl}/clicks`);
      console.log(response.data);
      const elem = document.getElementById("result1");
      elem.textContent = `요청 횟수: http://localhost:8081/${response.data.requestCount}`;
      elem.href = `http://localhost:8081/${response.data.requestCount}`;
    } catch (error) {
      console.error("요청 횟수를 가져오는 데 실패했습니다.", error);
    }
  };

  return (
    <div>
      <form>
        <div>
          <input
            type="text"
            value={enteredUrl}
            onChange={urlChangeHandler}
            placeholder="주소를 입력해주세요."
          />
          <select value={selectedOption} onChange={optionChangeHandler}>
            <option value="1">Base62</option>
            <option value="2">UUID</option>
            <option value="3">Adler</option>
          </select>
        </div>
        <div>
          <button onClick={shortenUrlHandler}>링크단축</button>
          <button onClick={getRequestCountHandler}>요청횟수 조회</button>
        </div>
      </form>
      <a href="#" id="result1"></a>
      <div id="result2"></div>
    </div>
  );
};

export default UrlForm;
