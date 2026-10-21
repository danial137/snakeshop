import React from "react";
import MaxWIdthWraper from "./MaxWIdthWraper";

const Footer = () => {
  return (
    <footer className="bg-white h-20 relative">
      <MaxWIdthWraper>
        <div className="border-t border-gray-200" />

        <div className="h-full flex flex-col md:flex-row md:justify-between">
          <div className="text-center md:text-left pb-2 md:pb-0">
            <p className="text-sm text-muted-foreground">&copy;</p>
          </div>
        </div>
      </MaxWIdthWraper>
    </footer>
  );
};

export default Footer;
