import { Typewriter } from "react-simple-typewriter";
import profileImage from "../../src/assets/profile-pic (1).png";
import 'animate.css';
import { FaDownload, FaFacebook, FaGithub, FaXTwitter } from "react-icons/fa6";

const AboutMe = () => {
  return (
    <div className="aboutMe flex flex-col-reverse md:flex-row items-center justify-evenly mt-4">
      <div className="flex flex-col text-start justify-center gap-4">
        <h1 className="text-2xl md:text-5xl font-bold animate__animated animate__backInLeft">
          Hi <br />
          I&apos;m Tauhidul Islam
        </h1>
   <div>
   <h2 className="font-semibold text-2xl">
          <Typewriter
            words={[
              "Jr.Frontend Developer",
              "Javascript Developer",
              "ReactJS Developer",
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </h2>
   </div>

        <a href="/cv.pdf" download="My_Resume">
          <button className="btn bg-purple-600 text-white">
            Resume <FaDownload />
          </button>
        </a>

        {/* Social links */}
        <div className="flex gap-8">
          <a href=" https://www.facebook.com/tauhid.sakib.40/" target="_blank">
            <button className="btn rounded-full border-none bg-blue-500 hover:bg-blue-400 text-white text-[18px]">
              <FaFacebook />
            </button>
          </a>
          <a href="https://github.com/tsakib2000" target="_blank">
            <button className="btn rounded-full border-none bg-black hover:bg-gray-800 text-white text-[20px]">
              <FaGithub />
            </button>
          </a>
          <a href="https://x.com/TAUHIDULIS10407" target="_blank">
            <button className="btn rounded-full border-none bg-blue-500 hover:bg-blue-400 text-white text-[20px] ">
              <FaXTwitter />
            </button>
          </a>
        </div>
      </div>
      <div>
        <img className=" h-[200px] md:h-[400px] animate__animated  animate__backInRight" src={profileImage} alt="" />
      </div>
    </div>
  );
};

export default AboutMe;
