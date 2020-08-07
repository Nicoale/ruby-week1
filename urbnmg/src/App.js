import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import logo from "./urbn.png";
import "./App.css";
import "./faq";
import Accordion from "./faq";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Tabs>
          <TabList>
            <Tab>Home</Tab>
            <Tab>FAQs</Tab>
            <Tab>Let's Talk</Tab>
          </TabList>

          <TabPanel>
            <h6>
              Are you an aspiring plant parent? How do you suppose you'd like to
              grow yours?
              <br />
              Whether just for your balcony or a larger farm I would love to
              help you actualise this.
              <br />
              Theres no better satisfaction than that of growing your food from
              scratch and knowing its free from harmful chemicals, <br />
              as you will get just what you want from your OWN farm. <br />
              For those who would only love to to get ready homegrown nutritious
              vegetablesof the same quality, look no further because
              <br />
              URBN Microgreens and Plants has your back!
            </h6>
          </TabPanel>
          <TabPanel>
            <h6>
              <Accordion />
            </h6>
          </TabPanel>
          <TabPanel>
            <h3>
              How may I be of help?
              <a
                className="App-link"
                href="https://wa.me/25472520499"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat!
              </a>
            </h3>
          </TabPanel>
        </Tabs>
      </header>
    </div>
  );
}

export default App;
