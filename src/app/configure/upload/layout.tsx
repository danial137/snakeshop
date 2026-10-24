import MaxWIdthWraper from "@/components/MaxWIdthWraper";
import { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWIdthWraper className="flex-1 flex flex-col ">
      {children}
    </MaxWIdthWraper>
  );
};

export default Layout;
