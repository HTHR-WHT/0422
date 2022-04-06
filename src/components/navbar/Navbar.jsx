import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          <a href="#intro" className="logo">
            hthr-wht.
          </a>
        </div>
        <div className="right">
          <div className="itemContainer">
            <a
              href="https://www.linkedin.com/in/heather-white-nyc/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon className="icon" fontSize="large" aria-label="linkedIn link" />
            </a>
            <a href="https://github.com/HTHR-WHT" target="_blank" rel="noreferrer">
            <GitHubIcon className="icon" fontSize="large" aria-label="github repo link" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
