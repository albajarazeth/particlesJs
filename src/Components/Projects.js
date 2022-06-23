import "./Projects.css";
import movies from "./images/movieSearch.jpg";
import omni from "./images/omniFood.jpg";
import tinDog from "./images/tinDog.jpg";
import { AiOutlineLink } from "react-icons/ai";

export default function Projects() {
  const projects = [
    {
      title: "Movie Search",
      description:
        "Created a movie search app by fetching movie data from imbdi API. Creaeated using HTML, CSS, JavaScript, React",
      image: movies,
      link: "https://snazzy-medovik-75ca85.netlify.app/",
    },
    {
      title: "Omni Food",
      description: "Food website using HTML,CS,JS from a challenge",
      image: omni,
      link: "https://albajarazeth.github.io/omnifood.github.io/",
    },
    {
      title: "TinDog",
      description: "Food website using HTML,CS,JS from a challenge",
      image: tinDog,
      link: "https://albajarazeth.github.io/tindog.github.io/",
    },
  ];

  const items = projects.map((el) => {
    return (
      <div className="card">
        <img className="images" src={el.image} />
        <a href={el.link}>
          <div className="card-text">
            <h3>{el.title}</h3>
            <AiOutlineLink size={20} />
          </div>
        </a>
      </div>
    );
  });
  return (
    <>
      <section className="projects-container">
        <h1 className="hd">Projects</h1>
        <div className="cards-container">{items}</div>
      </section>
    </>
  );
}
