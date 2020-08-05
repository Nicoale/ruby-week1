import React from "react";
import logo from "./urbn.png";
import "./App.css";
import Tabs from "./Tabs";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Tabs>
          <div label="Home">
            Hey there, <em>Plant lover</em>!
          </div>
          <div label="FAQs">
            After 'while, <em>Crocodile</em>!
          </div>
          <div label="Let's Talk">
            Nothing to see here, this tab is <em>extinct</em>!
          </div>
        </Tabs>
        <p>
           How May I be of help?
        </p>
        <a
          className="App-link"
          href="https://wa.me/25472520499"
          target="_blank"
          rel="noopener noreferrer"
        >
          Let's Talk!
        </a>
      </header>
    </div>
  );
}

export default App;
