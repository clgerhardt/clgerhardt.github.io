import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


const Home = React.forwardRef((props, ref) => {
  return (
    <>
      <div ref={ref}></div>
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
