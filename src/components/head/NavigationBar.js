import React from "react";
import WhatIsShortUrl from "../main/WhatIsShortUrl";
import AboutCreator from "../main/AboutCreator";

const NavigationBar = (props) => {
  const openModal = props.openModal;

  return (
    <nav>
      <ul>
        <li>
          <button onClick={() => openModal(<WhatIsShortUrl />)}>
            단축 URL이란?
          </button>
        </li>
        <li>
          <button onClick={() => openModal(<AboutCreator />)}>만든이</button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
