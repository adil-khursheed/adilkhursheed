import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-scroll";
import useScrollDirection from "../customHook/ScrollDirection";

const Header = () => {
  const [toggleNav, setToggeleNav] = useState(false);

  const scrollDirection = useScrollDirection();

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <>
      <header
        className={`fixed w-full ${
          scrollDirection === "down" ? "-top-16" : "top-0"
        } backdrop-blur-lg bg-black/40 transition-all duration-500 z-20`}>
        <nav className="flex justify-between h-16 items-center max-w-4xl mx-auto px-5">
          <div className="z-20">
            <h2 className="text-2xl font-extrabold text-white">Adil.</h2>
          </div>
          <ul className="hidden md:flex gap-10">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="cursor-pointer text-sm font-medium capitalize text-white hover:scale-105 duration-200">
                <Link to={link} smooth duration={300}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>

          <div
            onClick={() => setToggeleNav(!toggleNav)}
            className="cursor-pointer z-20 text-white md:hidden">
            {toggleNav ? <CloseIcon /> : <MenuIcon />}
          </div>
        </nav>
      </header>

      <ul
        className={`md:hidden fixed top-16 right-0 bottom-0 flex flex-col justify-start py-16 items-center w-3/4 h-screen backdrop-blur-lg bg-black/40 gap-10 z-20 ${
          toggleNav ? "translate-x-0" : "translate-x-full"
        } transition-all duration-500 ease-in-out`}>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className="cursor-pointer text-xl font-medium capitalize text-white hover:scale-105 duration-200">
            <Link
              to={link}
              smooth
              duration={300}
              onClick={() => setToggeleNav(!toggleNav)}>
              {link}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Header;
