import React from "react";
import Header from "./components/Header";
import Ads from "./pages/Ads";
import { Route, Routes } from "react-router-dom";
import AdForm from "./pages/AdForm";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Header />
      <div className="px-3 m-auto max-w-7xl ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auto" element={<Ads />} />
          <Route path="/create-ad" element={<AdForm />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
