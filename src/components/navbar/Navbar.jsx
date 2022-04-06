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
            <LinkedInIcon className="icon" />
            <GitHubIcon className="icon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
