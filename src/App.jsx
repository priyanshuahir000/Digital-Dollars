import React from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";

function App() {
  return (
    <Theme>
      <>
        <TopBar />
        <Navigation />
        <Hero />
      </>
    </Theme>
  );
}

export default App;
