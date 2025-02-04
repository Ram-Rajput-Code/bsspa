// import React from "react";
// import AboutSchool from "./components/AboutSchool";
// import AboutBanner from "./components/AboutBanner";
// import FounderOfSchool from "./components/FounderOfSchool";
// import SecretaryMessage from "./components/SecretaryMessage";
// import AboutVisionMission from "./components/AboutVisionMission";
// import TenDevineMessage from "../homePage/homeComponents/TenDevineMessage";
// import PrincipalMessage from "../homePage/homeComponents/PrincipalMessage";
// import FounderOfBSSPA from "./components/FounderOfBSSPA";
// import Members from "./components/Members";
// import NavBar from "./components/NavBar";

// const AboutPage = () => {
//   return (
//     <div>
//       <NavBar />
//       <AboutBanner id="about-banner" />
//       <AboutSchool id="about-school" />
//       <FounderOfBSSPA id="founder-of-bsspa" />
//       <FounderOfSchool id="founder-of-school" />
//       <SecretaryMessage id="secretary-message" />
//       <PrincipalMessage id="principal-message" />
//       <Members id="members" />
//       <AboutVisionMission id="vision-mission" />
//       <TenDevineMessage id="ten-devine-message" />
//     </div>
//   );
// };

// export default AboutPage;

//scroll new
import React, { useRef } from "react";
import AboutSchool from "./components/AboutSchool";
import AboutBanner from "./components/AboutBanner";
import FounderOfSchool from "./components/FounderOfSchool";
import SecretaryMessage from "./components/SecretaryMessage";
import AboutVisionMission from "./components/AboutVisionMission";
import TenDevineMessage from "../homePage/homeComponents/TenDevineMessage";
import PrincipalMessage from "../homePage/homeComponents/PrincipalMessage";
import FounderOfBSSPA from "./components/FounderOfBSSPA";
import Members from "./components/Members";
import NavBar from "../navBar/components/NavBar";
import NavOne from "../navBar/components/NavOne";

const AboutPage = () => {
  const aboutBannerRef = useRef(null);
  const aboutSchoolRef = useRef(null);
  const founderBSSPARef = useRef(null);
  const founderSchoolRef = useRef(null);
  const secretaryMessageRef = useRef(null);
  const principalMessageRef = useRef(null);
  const membersRef = useRef(null);
  const visionMissionRef = useRef(null);
  const tenDevineMessageRef = useRef(null);

  return (
    <div>
      <NavOne/>
      <NavBar
        aboutBannerRef={aboutBannerRef}
        aboutSchoolRef={aboutSchoolRef}
        founderBSSPARef={founderBSSPARef}
        founderSchoolRef={founderSchoolRef}
        secretaryMessageRef={secretaryMessageRef}
        principalMessageRef={principalMessageRef}
        membersRef={membersRef}
        visionMissionRef={visionMissionRef}
        tenDevineMessageRef={tenDevineMessageRef}
      />

      <div ref={aboutBannerRef}>
        <AboutBanner />
      </div>
      <div ref={aboutSchoolRef}>
        <AboutSchool />
      </div>
      <div ref={founderBSSPARef}>
        <FounderOfBSSPA />
      </div>
      <div ref={founderSchoolRef}>
        <FounderOfSchool />
      </div>
      <div ref={secretaryMessageRef}>
        <SecretaryMessage />
      </div>
      <div ref={principalMessageRef}>
        <PrincipalMessage />
      </div>
      <div ref={membersRef}>
        <Members />
      </div>
      <div ref={visionMissionRef}>
        <AboutVisionMission />
      </div>
      <div ref={tenDevineMessageRef}>
        <TenDevineMessage />
      </div>
    </div>
  );
};

export default AboutPage;
