import React from "react";
import Home from "./pages/Home";
import AppProviders from "./AppProviders";
import "./App.css";
import Header from "components/Header";

function App() {
  return (
    <div className="h-lvh bg-Impar-Gray overflow-auto">
      <AppProviders>
        <Header />
        <Home />
      </AppProviders>
    </div>
  );
}

export default App;
