import "./Technologies.css";
import React from "react";
import { ReactComponent as CssIcon } from "./svgs/css-3.svg";
import { ReactComponent as JSIcon } from "./svgs/js-brands.svg";
import { ReactComponent as HtmlIcon } from "./svgs/html-1.svg";
import { ReactComponent as ReactIcon } from "./svgs/react-2.svg";
import { ReactComponent as ReactNativeIcon } from "./svgs/react-native-1.svg";
import { ReactComponent as FireBaseIcon } from "./svgs/firebase-1.svg";

const items = [
  { comp: <HtmlIcon /> },
  { comp: <CssIcon /> },
  { comp: <JSIcon /> },
  { comp: <ReactIcon /> },
  { comp: <ReactNativeIcon /> },
  { comp: <FireBaseIcon /> },
];

const icon = items.map((el) => {
  return <div className="icon">{el.comp}</div>;
});
export default function Technologies() {
  return (
    <>
      <section className="tech-container">
        <div className="tech-content">
          <h1 className="tech-header hd">My tech stack</h1>
          <div className="icon-container">{icon}</div>
        </div>
      </section>
    </>
  );
}
