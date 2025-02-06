import Navbar from "../Component/Navbar";
import AboutMe from "../Component/AboutMe";
import MyInfo from "../Component/MyInfo";
import Skills from "../Component/Skills";
import MyProjects from "../Component/MyProjects";
import ContactMe from "../Component/ContactMe";
import Footer from "../Component/Footer";


const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="h-[100px]">
        <Navbar />
      </div>

      <div>
        <AboutMe />
        <MyInfo />
        <Skills />
        <MyProjects/>
    <ContactMe/>
      </div>
      <Footer/>
    </div>
  );
};

export default Main;
