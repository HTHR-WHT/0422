import "./portfolio.scss";

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <h1>projects</h1>
      <ul>
        <li className="active">mobile app</li>
        <li>web app</li>
        <li>game</li>
      </ul>
      <div className="container">
        <div className="item">
          <img src="./assets/cd_screen.png" alt="mobile app demo screenshot" />
          <h3>City Diary</h3>
        </div>
        <div className="item">
          <img
            src="./assets/hotsauce_screen.png"
            alt="e-commerce web app demo screenshot"
          />
          <h3>Hot 'n' Saucy</h3>
        </div>
        <div className="item">
          <img src="./assets/starball_screen.png" alt="game demo screenshot" />
          <h3>Starball</h3>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
