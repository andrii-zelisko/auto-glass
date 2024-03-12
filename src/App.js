import React from "react";
import "./App.scss";
import Header from './components/Header';
import Navigation from "./components/Navigation";
import AboutUs from "./components/AboutUs";
import Gallery from './components/Gallery';
import Providers from "./components/Providers";
import Contacts from "./components/Contacts";
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <AboutUs />
      <Gallery />
      <Providers />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
