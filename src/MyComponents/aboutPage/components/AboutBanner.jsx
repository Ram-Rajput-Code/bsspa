//src/MyComponents/aboutPage/components/AboutBanner.jsx
//local image
// import React from "react";
// import "./about.css";
// const AboutBanner = () => {
//   return (
//     <div className="container-fluid" style={{ padding: "0" }}>
//       <div className="col-12">
//         <img
//           src="/images/about-us-banner.jpg"
//           alt=""
//           width={"100%"}
//           border={"2px slide blue"}
//           style={{ opacity: "1" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default AboutBanner;

// image from server
import React, { useState, useEffect } from "react";
import { getBanners } from "../../../api/api"; // Import API function

const AboutBanner = () => {
  const [banner, setBanner] = useState(null);

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBanners();
        if (data.length > 0) {
          setBanner(data[0]); // Assuming there is only one banner
        }
      } catch (error) {
        console.error("Error fetching banner:", error);
      }
    };
    fetchBanner();
  }, []);

  return (
    <div className="container-fluid" style={{ padding: "0" }}>
      <div className="col-12">
        {banner ? (
          <img
            src={`http://localhost:5000/uploads/${banner.image}`}
            alt="About Us Banner"
            width="100%"
            style={{ opacity: "1", border: "2px solid blue" }}
          />
        ) : (
          <p>Loading banner...</p>
        )}
      </div>
    </div>
  );
};

export default AboutBanner;
