import React, { useState } from "react";
import "./App.css";
import Header from "./components/interface/header";
import Main from "./components/main";
import Footer from "./components/interface/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
