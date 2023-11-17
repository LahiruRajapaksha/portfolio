import { useState } from "react";
import MainLayout from "./components/Layouts/MainLayout";
import PageNavBar from "./components/NavBar/NavBar";

function App() {
  const [selectedPage, setSelectedPage] = useState("Home");
  return (
    <MainLayout>
      <PageNavBar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
    </MainLayout>
  );
}

export default App;
