import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["code.", "create.", "collaborate."],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="./assets/hmWhite_21.png" alt="cmyk portrait of engineer" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>software engineer</h2>
          <h1>Heather White</h1>
          <h3>
            <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img
            src="./assets/icons8-expand-arrow-50.png"
            alt="expand down arrow"
          />
        </a>
      </div>
    </div>
  );
};

export default Intro;
