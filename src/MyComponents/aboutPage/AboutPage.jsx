import React from "react";
import AboutSchool from "./components/AboutSchool";
import AboutBanner from "./components/AboutBanner";
import FounderOfSchool from "./components/FounderOfSchool";
import SecretaryMessage from "./components/SecretaryMessage";
import AboutVisionMission from "./components/AboutVisionMission";
import TenDevineMessage from "../homePage/homeComponents/TenDevineMessage";
import PrincipalMessage from "../homePage/homeComponents/PrincipalMessage";
import FounderOfBSSPA from "./components/FounderOfBSSPA";
import Members from "./components/Members";

const AboutPage = () => {
  return (
    <div>
      
      <AboutBanner />
      <AboutSchool />
      <FounderOfBSSPA />
      <FounderOfSchool />
      <SecretaryMessage />
      <PrincipalMessage />
      <Members/>
      <AboutVisionMission />
      <TenDevineMessage />
    </div>
  );
};

export default AboutPage;
