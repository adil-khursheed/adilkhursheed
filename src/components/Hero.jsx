import HeroImage from "../images/adil_khursheed.png";
import { socials } from "../Socials";
import resume from "../adil_khursheed.pdf";
import DownloadIcon from "@mui/icons-material/Download";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      name="home"
      className="w-full h-screen bg-hero grid place-items-center">
      <div className="flex flex-col-reverse items-center justify-center gap-5 md:gap-4 md:flex-row md:justify-between overflow-x-hidden">
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1 }}>
          <h1 className="text-white text-3xl md:text-4xl lg:text-5xl text-center font-bold md:text-left leading-snug md:leading-snug lg:leading-snug mb-6">
            Nice to meet you!👋🏻 <br />
            I'm {""}
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-800">
              Adil Khursheed
            </span>
          </h1>
          <p className="text-white text-center text-md md:text-left mb-6 max-w-xl">
            Based in India, I'm a MERN stack web developer passionate about
            building accessible web apps that users love.
          </p>
          <div className="hidden lg:flex gap-6 max-w-md mb-6">
            {socials.map((social) => (
              <a
                key={social.name}
                target="_blank"
                rel="noopener noreferrer"
                href={social.href}
                className="flex flex-col text-emerald-500 hover:scale-110 transition-all duration-300">
                <span>{social.icon}</span>
              </a>
            ))}
          </div>
          <div className="grid place-content-center md:place-content-start">
            <a
              href={resume}
              download
              className="bg-emerald-100 text-emerald-600 py-4 px-6 rounded-lg text-md hover:bg-emerald-600 hover:text-white shadow-md shadow-slate-900 flex gap-1 items-center transition-all duration-300">
              <span>Download CV</span>
              <span>
                <DownloadIcon sx={{ fontSize: 18 }} />
              </span>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0%", opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-60 h-60 md:max-w-xs md:w-full md:h-auto bg-white bg-opacity-60 backdrop-blur-[8px] rounded-lg">
          <img
            src={HeroImage}
            alt="Adil Khursheed"
            className="w-full h-full object-cover rounded-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
