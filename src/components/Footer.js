import React from "react";

const Footer = () => {
  const date = new Date();
  let presentYear = date.getFullYear();
  return (
    <>
      <div className="flex justify-between items-center pb-16 lg:pb-0">
        <h2 className="text-3xl font-extrabold text-white">Adil.</h2>
        <small className="text-white">
          Copyright &copy; {presentYear} | Adil Khursheed
        </small>
      </div>
    </>
  );
};

export default Footer;
