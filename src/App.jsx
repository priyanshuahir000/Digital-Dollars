import React from "react";
import "./App.css";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import TopBar from "./components/TopBar";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Tabs from "./components/Tabs";
import Sec1 from "./components/sections/Sec1";
import Sec2 from "./components/sections/Sec2";
import Sec3 from "./components/sections/Sec3";
import Sec4 from "./components/sections/Sec4";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <Theme>
      <RecoilRoot>
        <>
          <TopBar />
          <Navigation />
          <Hero />
          <Tabs />
          <Sec1 />
          <Sec2 />
          <Sec3 />
          <Sec4 />
        </>
      </RecoilRoot>
    </Theme>
  );
}

export default App;
