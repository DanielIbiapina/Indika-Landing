import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ForProviders from "./components/ForProviders";
import ForClients from "./components/ForClients";
import Communities from "./components/Communities";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";
import TermsOfService from "./components/TermsOfService";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <HowItWorks />
      <ForClients />
      <ForProviders />
      <Communities />
      <Testimonials />
      <Download />
      <TermsOfService />
      <Footer />
    </div>
  );
}

export default App;
