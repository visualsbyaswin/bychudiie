import React from "react";
// import Home from "./pages/Home";
import { BrowserRouter, Route,  Routes } from "react-router-dom";


import LenisScroll from "./Lenisscroll/lenis";

import Home from "./pages/Home";
// import Home from "./home/Home";

const App = () => {
LenisScroll()
  return (
    <main>

      <BrowserRouter  >
  
        <Routes>
          <Route path="/bychudiie" element={<Home/>} />

        </Routes>
      </BrowserRouter>
  
    </main>
  );
};

export default App;
