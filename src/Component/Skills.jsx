import html from "../assets/Logos/html.png";
import css from "../assets/Logos/css-3.png";
import js from "../assets/Logos/js.png";
import react from "../assets/Logos/react.png";
import Github from "../assets/Logos/github.png";
import Firebase from "../assets/Logos/firebase.png";
import Marquee from "react-fast-marquee";
import { useEffect } from "react";
import AOS from "aos";

const Skills = () => {
    useEffect(()=>{
      AOS.init();
    })
  return (
    <div id="skills" className="my-8">
      <h1 className="text-center text-3xl md:text-4xl font-bold mb-5">
        My Skills
      </h1>

      <Marquee className="my-7 w-full" direction="left" loop={0}>
        <div className="flex gap-14 justify-center items-center ">
        <img className="h-12 " src={html} alt="" />
        <img className="h-12 " src={css} alt="" />
        <img className="h-12 " src={js} alt="" />
        <img className="h-12 " src={react} alt="" />
        <img className="h-12 " src={Github} alt="" />
        <img className="h-12 " src={Firebase} alt="" />
        </div>
      </Marquee>

      <div data-aos="fade-right" className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 *:font-semibold">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1>HTML 90%</h1>
            <progress
              className="progress progress-error w-56 h-5"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>CSS 85%</h1>
            <progress
              className="progress progress-primary w-56 h-5"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Tailwind CSS 90%</h1>
            <progress
              className="progress progress-primary w-56 h-5"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Javascript 75%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="75"
              max="100"
            ></progress>
          </div>

          <div className="flex items-center justify-between gap-4">
            <h1>Git 60%</h1>
            <progress
              className="progress progress-success w-56 h-5"
              value="60"
              max="100"
            ></progress>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-between gap-4">
            <h1>ReactJS 70%</h1>
            <progress
              className="progress progress-info w-56 h-5"
              value="70"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Firebase 60%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="60"
              max="100"
            ></progress>
          </div>
          <div className="flex items-center justify-between gap-4">
            <h1>Express 10%</h1>
            <progress
              className="progress progress-warning w-56 h-5"
              value="10"
              max="100"
            ></progress>
          </div>

          <div className="flex items-center justify-between gap-4">
            <h1>MongoDB 10%</h1>
            <progress
              className="progress progress-success w-56 h-5"
              value="10"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
