import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import ForProviders from "./components/ForProviders";
import ForClients from "./components/ForClients";
import Communities from "./components/Communities";
import Testimonials from "./components/Testimonials";
import Download from "./components/Download";
import TermsOfService from "./components/TermsOfService";
import AccountDeletion from "./components/AccountDeletion";
import Support from "./components/Support";
import Subscription from "./components/Subscription";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  useEffect(() => {
    // Verificar se há uma rota específica na URL
    const path = window.location.pathname;
    if (path === "/excluir-conta") {
      setCurrentPage("deletion");
    } else if (path === "/suporte") {
      setCurrentPage("support");
    } else if (path === "/assinatura") {
      setCurrentPage("subscription");
    } else {
      setCurrentPage("home");
    }
  }, []);

  // Renderizar página de exclusão de conta
  if (currentPage === "deletion") {
    return (
      <div className="App">
        <Header />
        <AccountDeletion />
        <Footer />
      </div>
    );
  }

  // Renderizar página de suporte
  if (currentPage === "support") {
    return (
      <div className="App">
        <Header />
        <Support />
        <Footer />
      </div>
    );
  }

  // Renderizar página de assinatura
  if (currentPage === "subscription") {
    return (
      <div className="App">
        <Header />
        <Subscription />
        <Footer />
      </div>
    );
  }

  // Renderizar página principal
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
