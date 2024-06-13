import React from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Section, Theme } from "@radix-ui/themes";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import { RecoilRoot } from "recoil";
import "./animations.css";
import { FullSection } from "./components/sections/FullSection";
import { RiskSection } from "./components/RiskSection";
import { Testimonial } from "./components/Testimonial";
import { FAQ } from "./components/FAQ";

function App() {
  return (
    <Theme>
      <RecoilRoot>
        <>
          <TopBar />
          <Navigation />
          <Hero />
          <FullSection />
          <RiskSection />
          <Testimonial />
          <FAQ />
        </>
      </RecoilRoot>
    </Theme>
  );
}

export default App;
