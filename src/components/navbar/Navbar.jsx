import "./navbar.scss";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            howdy.
          </a>
          <div className="itemContainer">
            <LinkedInIcon />
            <GitHubIcon />
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
};

export default Navbar;
