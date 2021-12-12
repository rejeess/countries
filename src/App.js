import React, { Fragment } from "react";
import { Router, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Content from "./components/Content";
import Home from "./components/Home";
import MainHeader from "./components/MainHeader";
import CountryDetails from "./components/CountryDetails";

// import TestContent from "./components/TestContent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <MainHeader />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country" element={<Content />} />
          <Route path="/country/:countryDetails" element={<CountryDetails />} />
        </Routes>
      </main>

      {/* <Layout /> */}
      {/* <TestContent /> */}
      {/* <Content /> */}
    </div>
  );
}

export default App;
