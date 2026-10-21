import React from "react";
import MaxWIdthWraper from "./MaxWIdthWraper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWIdthWraper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between"></div>
      </MaxWIdthWraper>
    </footer>
  );
};

export default Footer;
