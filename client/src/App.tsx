import { useEffect, useState } from "react";
import MainLayout from "./components/Layouts/MainLayout";
import PageNavBar from "./components/NavBar/NavBar";
import useMediaQuery from "./hooks/useMediaQuery";
import DotGroup from "./components/DotGroup/DotGroup";
import Landing from "./components/Landing/Landing";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MainLayout>
      <PageNavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <div className="w-full mx-auto h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing selectedPage={selectedPage} />
        {/* <Landing selectedPage={selectedPage} /> */}
      </div>
    </MainLayout>
  );
}

export default App;
