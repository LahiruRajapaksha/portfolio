import { ReactNode } from "react";

const MainLayout = ({ children }: { children: ReactNode }) => {
  return <div className="h-screen">{children}</div>;
};

export default MainLayout;
