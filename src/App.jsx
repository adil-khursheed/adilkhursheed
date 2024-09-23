import Header from "./components/Header";
import Hero from "./components/Hero";
import SkillSection from "./components/SkillSection";
import ProjectSection from "./components/ProjectSection";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import SocialLinks from "./components/SocialLinks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import WorkExperience from "./components/WorkExperience";

function App() {
  return (
    <div className=" relative bg-black">
      <Header />
      <ToastContainer />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto">
          <SocialLinks />
          <WorkExperience />
          <SkillSection />
          <ProjectSection />
          <Contact />
        </div>
      </main>

      <footer className="max-w-4xl mx-auto px-5 py-5 border-t-2 border-slate-500">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
