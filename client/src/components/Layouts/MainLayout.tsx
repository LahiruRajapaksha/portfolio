import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="container flex flex-col">{children}</div>;
};

export default MainLayout;
