import "./Contact.css";
import React from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const socials = [
  {
    name: "Gmail",
    value: "jarazethalba@gmail.com",
    icon: <AiOutlineMail />,
  },
  {
    name: "LinkedIn",
    value: "My Profile",
    link: "https://www.linkedin.com/in/alba-garza-612ab822b/",
    icon: <AiFillLinkedin />,
  },
  {
    name: "Github",
    value: "My Profile",
    link: "https://github.com/albajarazeth",
    icon: <AiFillGithub />,
  },
];
export default function Contact() {
  const social = socials.map((el) => {
    return (
      <div className="social">
        <div className="social-text">
          <span className="social-icon">{el.icon}</span>
          <p>
            {el.name}:
            <span className="link">
              <a href={el.link}> {el.value}</a>
            </span>
          </p>
        </div>
      </div>
    );
  });
  return (
    <div className="contact-container">
      <h1 className="contact-heading">Reach out to me</h1>
      <div className="contact-info">{social}</div>
    </div>
  );
}
