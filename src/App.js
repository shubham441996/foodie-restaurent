import React, { Component } from "react";
import "./App.css";
import Header from "./components/header/header.js";
import Map from "./components/map/map";
import Instagram from "./components/instagram/instagram";
import Footer from "./components/footer/footer";
import Contact from "./components/contact-us/contact";
import Navigation from "./components/scrollspy/navigation";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navigation />
        <div data-spy="scroll" data-target="#navigation" data-offset="0">
          <div className="top-container">
            <Header />
          </div>
          <Map />
          <Instagram />
          <Contact />
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
