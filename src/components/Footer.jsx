import React from "react";

const Footer = () => {
  const date = new Date();
  let presentYear = date.getFullYear();
  return (
    <>
      <div className="flex justify-center items-center pb-16 lg:pb-0">
        <small className="text-white text-[11px]">
          Copyright &copy; {presentYear} | Adil Khursheed
        </small>
      </div>
    </>
  );
};

export default Footer;
