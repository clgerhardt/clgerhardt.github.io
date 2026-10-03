import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HeaderUnav from "./components/HeaderUnav";
import HomeContent from "./components/HomeContent";
import ExperienceContent from "./components/ExperienceContent";
import ProjectContent from "./components/ProjectContent";

const Home = React.forwardRef((props, ref) => {
  const [hash, setHash] = React.useState(window.location.hash);

  React.useEffect(() => {
    const onHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  return (
    <>
      <div ref={ref}>
        <HeaderUnav />
        {hash === "" && <HomeContent />}
        {hash === "#experience" && <ExperienceContent />}
        {hash === "#projects" && <ProjectContent />}
      </div>
    </>
  );
});

const App = () => {
  const titleRef = React.useRef();

  return (
    <BrowserRouter basename={process.env.PUBLIC_URL + "/"}>
      <Routes>
        <Route path="/" exact element={<Home ref={titleRef} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
