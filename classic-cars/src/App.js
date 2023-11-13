import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Filter from "./components/filter";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
      <Filter />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
