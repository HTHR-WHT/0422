import resume from "./hWhite_resume.pdf";
import "./connect.scss";
import { InlineWidget } from "react-calendly";

const Connect = () => {
  const onDownload = () => {
    const link = document.createElement("a");
    link.download = resume;
    link.href = `${resume}`;
    link.click();
  };

  return (
    <div className="connect" id="connect">
      <div className="top">
        <div className="left">
          <h2>Let's connect.</h2>
          <img src="./assets/icons8-communication-100.png" alt="" />
        </div>
        <div className="right">
          <img
            src="./assets/icons8-download-resume-50.png"
            alt="download icon"
          />
          <button className="download" onClick={onDownload}>
            download my resume
          </button>
        </div>
      </div>
      <div className="bottom">
        <InlineWidget
          url="https://calendly.com/heatherwhitenyc/connect-chat"
        />
      </div>
    </div>
  );
};
export default Connect;
