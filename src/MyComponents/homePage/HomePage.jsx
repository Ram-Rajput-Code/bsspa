import React from "react";
import WelcomeMessage from "./homeComponents/WelcomeMessage";
import TenDevineMessage from "./homeComponents/TenDevineMessage";
import VisionMission from "./homeComponents/VisionMission";
import SessionAdmission from "./homeComponents/SessionAdmission";
import PrincipalMessage from "./homeComponents/PrincipalMessage";
import HomeSlider from "./homeComponents/HomeSlider";


const HomePage = () => {
  return (
    <div>
      <HomeSlider/>
      <WelcomeMessage />
      <PrincipalMessage />
      <TenDevineMessage />
      <VisionMission />
      <SessionAdmission />
    </div>
  );
};

export default HomePage;
