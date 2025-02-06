import html from "../assets/Logos/html.png";
import css from "../assets/Logos/css-3.png";
import js from "../assets/Logos/js.png";
import react from "../assets/Logos/react.png";
import Github from "../assets/Logos/github.png";
import Firebase from "../assets/Logos/firebase.png";
import tailwind from '../assets/Logos/tailwindcss-mark.d52e9897.svg'
import express from '../assets/Logos/express.png'
import mongodb from '../assets/Logos/MongoDB_Logomark_ForestGreen.svg'
import git from '../assets/Logos/icons8-git-96.png'

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

    

      <div data-aos="fade-right" className="flex flex-col md:flex-row justify-center gap-2 md:gap-8 *:font-semibold">
      <div className="  py-10">
      <div className="max-w-4xl mx-auto text-center">
      
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6 justify-center items-center">
          
      
          <div className="flex flex-col items-center">
            <img src={html} alt="HTML" className="w-12 h-12 mb-2" />
            <p className="text-sm">HTML</p>
          </div>

       
          <div className="flex flex-col items-center">
            <img src={css} alt="CSS" className="w-12 h-12 mb-2" />
            <p className="text-sm">CSS</p>
          </div>

     
          <div className="flex flex-col items-center">
            <img src={tailwind} alt="Tailwind CSS" className="w-12 h-12 mb-2" />
            <p className="text-sm">Tailwind CSS</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={js} alt="JavaScript" className="w-12 h-12 mb-2" />
            <p className="text-sm">JavaScript</p>
          </div>

          {/* Git */}
          <div className="flex flex-col items-center">
            <img src={git} alt="Git" className="w-12 h-12 mb-2" />
            <p className="text-sm">Git</p>
          </div>

          {/* Github */}
          <div className="flex flex-col items-center">
            <img src={Github} alt="Git" className="w-12 h-12 mb-2" />
            <p className="text-sm">GitHub</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={react} alt="ReactJS" className="w-12 h-12 mb-2" />
            <p className="text-sm">ReactJS</p>
          </div>

     
          <div className="flex flex-col items-center">
            <img src={Firebase} alt="Firebase" className="w-12 h-12 mb-2" />
            <p className="text-sm">Firebase</p>
          </div>

          
          <div className="flex flex-col items-center">
            <img src={express} alt="Express" className="w-12 h-12 mb-2" />
            <p className="text-sm">Express</p>
          </div>

        
          <div className="flex flex-col items-center">
            <img src={mongodb} alt="MongoDB" className="w-12 h-12 mb-2" />
            <p className="text-sm">MongoDB</p>
          </div>

        </div>
      </div>
    </div>
      </div>
    </div>
  );
};

export default Skills;
