import React from "react";

const Footer = () => {
  return (
    <div className="text-center bg-light py-3">
      <p className="mb-0">&copy; Dev-Yesung By Programmers Backend DevCourse</p>
      <p className="mb-0">
        Contact:{" "}
        <a
          href="https://github.com/Dev-Yesung"
          target="_blank"
          rel="noreferrer"
          className="text-decoration-none"
        >
          GitHub Link
        </a>
      </p>
    </div>
  );
};

export default Footer;
