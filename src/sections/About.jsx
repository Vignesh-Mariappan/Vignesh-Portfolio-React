import SectionHeading from "../shared/SectionHeading";
import React, { useContext } from "react";
import { AppContext } from "../App";
import "animate.css";

const About = () => {
  const { mode } = useContext(AppContext);

  return (
    <div>
      <SectionHeading
        secHeading="About"
        className="animate__animated animate_fadeIn"
      />
      <p
        className="about-body"
        data-aos="fade-up"
        style={{
          backgroundColor: mode === "dark" ? "rgb(75, 75, 75)" : "#bbb"
        }}
      >
        Innovative Front End Developer with 6 years experience building and
        maintaining responsive websites in fast-paced, collaborative
        environments. Proficient in{" "}
        <strong>
          HTML5, CSS3, JS(ES5 & ES6), Bootstrap4, SCSS, Responsive web design,
          React JS, RxJS, Styled components, Ant design & React Redux
        </strong>
        . Passionate front-end web developer to build all aspects of the user
        experience and user interface for client-facing landing pages.
      </p>
    </div>
  );
};

export default About;
