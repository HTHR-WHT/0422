import "./skills.scss";

const Skills = () => {
  const data = [
    {
      id: 1,
      title: "CREATIVE",
      list: "TOOLS",
      icon: "./assets/icons8-paint-brush-50.png",
      blurb:
        "I am a studio trained artist that values simple, thoughtful design that's delightful and tells a story with ease.",
      items: [
        "Figma",
        "Procreate",
        "Color theory",
        "Composition",
        "Illustration",
        "Digital illustration",
        "Goauche painting",
        "Costume design",
        "Character design",
        "Textile design",
      ],
    },
    {
      id: 2,
      title: "TECHNICAL",
      list: "SKILLS",
      icon: "./assets/icons8-code-50.png",
      blurb:
        "I am a full stack software engineer that enjoys the creative magic of the front-end and organized structure of the back-end.",
      items: [
        "JavaScript",
        "Node.js",
        "React",
        "Axios HTTP",
        "Express",
        "Redux",
        "React Native",
        "Expo",
        "Sequelize",
        "PostgreSQL",
        "Git",
        "Material UI",
        "Firebase",
        "p5.js",
      ],
    },
    {
      id: 3,
      title: "PROFESSIONAL",
      list: "ASSETS",
      icon: "./assets/icons8-people-working-together-50.png",
      blurb:
        "I am a reliable collaborator with 7 years of experience planning, organizing, and meeting deadlines on large scale productions.",
      items: [
        "Agile Development",
        "Communication",
        "Collaboration",
        "Planning",
        "Organization",
        "Creative problem solving",
        "Attention to detail",
        "Self-led learning",
        "Active listening",
        "Inclusive",
        "Kind",
        "Supportive",
      ],
    },
  ];

  return (
    <div className="skills" id="skills">
      <div className="container">
        {data.map((d) => (
          <div key={d.id} className="card">
            <div className="top">
              <img className="icon" src={d.icon} alt="" />
              <h3>{d.title}</h3>
            </div>
            <div className="center">{d.blurb}</div>
            <div className="bottom">
              <h4>{d.list}</h4>
              <ul>
                {d.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
