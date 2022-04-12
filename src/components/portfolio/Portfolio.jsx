import { useState } from "react";
import "./portfolio.scss";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: 1,
      name: "City Diary",
      type: "mobile app",
      description:
        "City Diary is a mobile app that allows you to interact with and explore a user generated sound map.  Users can choose to publicly or privately share their audio on the City Diary Map, to revisit anytime.",
      tech: "React Native, Expo, Firebase",
      work: "Set up Firebase connection and initialized app structure including sign up/login, rendering maps and navigation, styled app views, set up GitHub Project Board, readme.md, wiki documentation.",
      image: "./assets/cd_screen.png",
      github: "./assets/icons8-github-50.png",
      repo: "HCJM/City-Diary",
      link: "./assets/icons8-youtube-50.png",
      path: "https://tinyurl.com/cityDiaryDemo",
    },

    {
      id: 2,
      name: "Hot 'n' Saucy",
      type: "e-commerce web app",
      description:
        "Hot 'n' Saucy is an e-commerce web app that provides customers with a variety of artisanal hot sauces. There are features for guests, returning customers with secure and persistent profiles, as well as administrators with access to product inventory and customer data.",
      tech: "Node.js, JavaScript, React, Redux, Axios, Express, pg, Sequelize, PostgreSQL, Heroku",
      work: "Pair programmed design schema, database models, 'all products' view and cart functionality.  Created redux store for Admin, secure CRUD routes, and initial checkout view.",
      image: "./assets/hotsauce_screen.png",
      github: "./assets/icons8-github-50.png",
      repo: "HotnSaucy/HotSauces",
      link: "./assets/icons8-heroku-50.png",
      path: "https://hotnsaucy.herokuapp.com/",
    },

    {
      id: 3,
      name: "Starball",
      type: "hackathon game",
      description:
        "Starball is a playful and creative coding exploration using p5.js.  Our friend, Starball, is a happy little sprite that loves to chase shiny things and munch on star candies.  However, all that star candy tends to make them act a little rowdy, to the chagrin of the alien sprites, their only neighbors in the sparkle cloud galaxy.",
      tech: "JavaScript, p5.js, p5 play library",
      work: "Solo developer",
      image: "./assets/starball_screen.png",
      github: "./assets/icons8-github-50.png",
      repo: "HTHR-WHT/p5-StarBall",
      link: "./assets/icons8-youtube-50.png",
      path: "https://youtu.be/OggzhuV33VI",
    },
  ];

  const handleClick = (direction) => {
    direction === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="portfolio" id="portfolio">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div key={d.id} className="container">
            <div className="item">
              <div className="left">
                <h2>{d.name}</h2>
                <h4>{d.type}</h4>
                <img className="demoPic" src={`${d.image}`} alt="" />
                <div className="imgContainer">
                  <a href={`${d.path}`} target="_blank" rel="noreferrer">
                    <img src={d.link} alt="" />
                  </a>
                  <a
                    href={`https://github.com/${d.repo}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={d.github} alt="" />
                  </a>
                </div>
              </div>
              <div className="right">
                <div className="rightContainer">
                  <p>{d.description}</p>
                  <p>
                    TECH: <br></br>
                    {d.tech}
                  </p>
                  <p className="focus">
                    FOCUS: <br></br>
                    {d.work}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/icons8-double-left-50.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/icons8-double-left-50.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
};

export default Portfolio;
